<template>
  <!-- <transition-group name="el-zoom-in-center"> -->
    <span uuid="c43a4d46-dc7e-4e40-95fe-d640d056ace0" 
      class="com-tag"
      :style="{ backgroundColor: color }"
      @click="handleClick"
      :class="[
        type ? 'com-tag--' + type : '',
        size ? 'com-tag--' + size : '',
      ]">
      <slot></slot>
      <i uuid="2b96994c-38f4-4e31-8275-39e7c0d5bac6" v-if="closable" @click="handleTagClose" class="com-tag__close el-icon-close"></i>
    </span>
  <!-- </transition-group> -->
</template>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './index.scss';
</style>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>
