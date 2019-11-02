<template>
  <!-- 后台单选组件 -->
  <div class="npm-com-bg-radio" role="radiogroup">
    <npm-com-bg-radio-item 
      v-for="(item, index) in radioList"
      :value="value"
      :label="item[labelvalue]"
      :disabled="item.disabled"
      :name="item.name"
      :key="index">{{ item[labelkey] }}</npm-com-bg-radio-item>
  </div>
</template>

<script>
  export default from './npm-com-bg-radio.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-radio.scss";
</style>
