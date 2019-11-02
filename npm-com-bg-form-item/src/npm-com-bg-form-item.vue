<template>
  <!-- 表单项组件（每个表单项组件基础格式为：表单项icon、表单项名称、表单项值） -->
  <div 
    class="npm-com-bg-form-item" 
    :class="[
      `span-${span}`, 
      {'is-block': isBlock},
      {'height-auto': heightAuto},
    ]">
    <!-- 图标 -->
    <div class="icon" :class="icon" v-if="icon"></div>

    <!-- 标签 -->
    <div class="label" v-if="label">
      <!-- 必填项标示 -->
      <div v-if="isRequired" class="is-required">*</div>
      <span class="text" v-html="label"></span>
      <span class="colon">：</span>
    </div>

    <!-- 内容 -->
    <div class="slot"><slot></slot></div>
  </div>
</template>

<script>
  export default from './npm-com-bg-form-item.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-form-item.scss";
</style>
