<template>
  <!-- 后台分页组件 -->
  <ul @click="handlePagerClick" class="pagination-pager">
    <li
      :class="{ active: currentPage === 1, disabled }"
      v-if="pageCount > 0"
      class="number">1</li>
    <li
      class="more btn-quickprev"
      :class="{ disabled }"
      v-if="showPrevMore">
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{ active: currentPage === pager, disabled }"
      class="number">{{ pager }}</li>
    <li
      class="more btn-quicknext"
      :class="{ disabled }"
      v-if="showNextMore">
    </li>
    <li
      :class="{ active: currentPage === pageCount, disabled }"
      class="number"
      v-if="pageCount > 1">{{ pageCount }}</li>
  </ul>
</template>

<script>
  export default from './pager.js';
</script>