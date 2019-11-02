<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="com-select-dropdown__item"
    v-show="visible"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled || groupDisabled,
      'hover': hover,
    }"
  >
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script>
import { getValueByPath } from './util.js';
import Emitter from '../../js/emitter.js';

export default {
  name: 'ElOption',

  componentName: 'ElOption',

  inject: ['select'],

  mixins: [Emitter],

  props: {
    value: {
      required: true,
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
    }
  },

  data() {
    return {
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false,
      index: -1,
    }
  },

  computed: {
    isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
    },
    
    currentLabel() {
      return this.label || this.value;
    },

    currentValue() {
      return this.value || this.label || '';
    },

    itemSelected() {
      if (!this.select.multipe) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
  },

  watch: {
    currentLabel() {
      this.dispatch('ElSelect', 'setSelected');
    },
    value(val, oldVal) {
      const { valueKey } = this.select;
      if (val[valueKey] === oldVal[valueKey]) return;
      this.dispatch('ElSelect', 'setSelected');
    },
  },

  created() {
      this.select.options.push(this);
      this.select.cachedOptions.push(this);
      // this.select.optionsCount++;
      // this.select.filteredOptionsCount++;

      // this.$on('queryChange', this.queryChange);
      // this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },

  methods: {
    isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      }
      const valueKey = this.select.valueKey;
      return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
    },

    contains(arr=[], target) {
      const valueKey = this.select.valueKey;
      return arr && arr.some(item => {
        return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
      })
    },

    selectOptionClick () {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch('ElSelect', 'handleOptionClick', [this, true]);
      }
    },

    hoverItem () {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    }
  },

  beforeDestroy() {
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
}
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './option.scss';
</style>

