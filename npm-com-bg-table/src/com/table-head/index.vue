<template>
  <div class="table-header-wrapper">
    <table cellspacing="0" cellpadding="0" border="0">
      <thead>
        <th width="55px" v-if="isChecked && !isTreeData"></th>
        <th 
          :width='item.width' 
          :colspan="item.colspan || 1"
          :rowspan="item.rowspan || 1"
          v-for="(item, index) in columns" 
          :class="columnHeader"
          :key="index">
          <div class="cell" v-if="item.slotHead">
            <slot :name="item.slotHead" :data="item"></slot>
          </div>
          <div class="cell" v-else>{{ item.label }}</div>
        </th>
      </thead>
    </table>
  </div>
</template>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>
