<template>
  <!-- 后台面包屑组件 -->
  <div class="npm-com-bg-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <span v-for="(item, index) in navList" :key="index">
      <npm-com-bg-breadcrump-item 
        :to="item.to"
        :replace="item.replace"
        :breadName="item.name"
        :index="index"></npm-com-bg-breadcrump-item>
    </span>
  </div>
  
</template>

<script>
  export default from './npm-com-bg-breadcrumb.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-breadcrumb.scss";
</style>
