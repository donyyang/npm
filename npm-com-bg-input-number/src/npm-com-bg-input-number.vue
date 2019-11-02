<template>
  <!-- 数字输入框组件（后台组件） -->
  <div class="npm-com-bg-input-number">
    <!-- 自减按钮 -->
    <span class="minus-btn" :class="{disabled: isDisableMinus}" @click="minus" v-if="!isDisableMinus">-</span>

    <!-- 输入框 -->
    <input class="input" type="text" :value="inputValue" @input="onInput">

    <!-- 自增按钮 -->
    <span class="plus-btn" :class="{disabled: isDisablePlus}" @click="plus" v-if="!isDisablePlus">+</span>
  </div>
</template>

<script>
  export default from './npm-com-bg-input-number.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-input-number.scss";
</style>
