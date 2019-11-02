<template>
  <div class="com-dropdown" v-clickoutside="handleDropdownHide">
    <slot></slot>
    <slot name="dropdown"></slot>
  </div>
</template>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './index.scss';
</style>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>
