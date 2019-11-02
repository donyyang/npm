<template>
  <li 
    class="com-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'com-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
  >
    <slot></slot>
  </li>
</template>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './index.scss';
</style>

<script>
import Emitter from '../../js/emitter.js';

export default {
  name: 'ElDropdownItem',

  componentName: 'ElDropdownItem',

  mixins: [Emitter],

  props: {
    command: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    divided: Boolean,
  },

  methods: {
    handleClick() {
      console.log('commandItem=====>');
      this.dispatch('ElDropdown', 'menu-item-click', [this.command, this])
    },
  },
}
</script>