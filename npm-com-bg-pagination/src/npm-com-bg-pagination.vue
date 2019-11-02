<template>
  <!-- 后台分页组件 -->
  <div class="npm-com-bg-pagination" :class="{ 'is-background': background }">
    <span class = "pagination-total" v-if="showTotal">共 {{ total }} 条</span>
    <button 
      type="button" 
      class="btn-prev"
      @click="handlePre"
      :disabled="disabled || internalCurrentPage <= 1"></button>
    <com-pager 
      :currentPage="internalCurrentPage" 
      :pageCount="internalPageCount"
      :pagerCount="pagerCount"
      :disabled="disabled"
      @change="handleChangePage"></com-pager>
    <button 
      type="button"
      class="btn-next"
      @click="handleNext"
      :disabled="disabled || internalCurrentPage >= internalPageCount"></button>
    <span v-if="jump" class="pagination_jump">
      <span class="jump_text">前往</span>
      <div class="pagination-input">
        <input 
          @change="handleIptChange"
          :value="internalCurrentPage"
          :disabled="disabled"
          class="input-inner"
          type="number"
          :min ="1"
          :max="internalCurrentPage">
      </div>
      <span class="jump_text">页</span>
    </span>
  </div>
</template>

<script>
  export default from './npm-com-bg-pagination.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-pagination.scss";
</style>
