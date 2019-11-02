<template>
  <div
    class="com-select-dropdown com-popper"
    :class="[{ 'is-multiple': $parent.multiple },popperClass ]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
import Popper from './utils/vue-popper';
export default {
  name: 'ElSelectDropdown',

  componentName: 'ElSelectDropdown',

  data() {
    return {
      minWidth: '',
    }
  },

  mixins: [Popper],

  computed: {
    popperClass() {
      return this.$parent.popperClass
    }
  },

  props: {
    placement: {
      default: 'bottom-start'
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    '$parent.inputWidth'() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
    }
  },

  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on('updatePopper', () => {
      if (this.$parent.visible) this.updatePopper();
    });
    this.$on('destroyPopper', this.destroyPopper);
  }
}
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './option.scss';
</style>

