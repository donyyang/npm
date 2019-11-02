<template>
  <!-- button按钮(后台组件) size ? 'npm-com-bg-button--' + size : '',-->
  <button 
    class='npm-com-bg-button'
    @click='handleClick'
    :disabled='disabled'
    :type='nativeType'
    :class="[
      type ? 'npm-com-bg-button--' + type : '',
      {
        'is-disabled': disabled,
        'is-round': round,
        'is-circle': circle,
      }
    ]"
  >
    <i :class='icon' v-if='icon'></i>
    <span v-if='$slots.default'><slot></slot></span>
  </button>
</template>

<script>
  export default from './npm-com-bg-button.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-button.scss";
</style>
