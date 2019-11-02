<template>
  <!-- 表格组件包括分页 -->
  <div class="table-wrapper">
    <div class="npm-com-bg-table">
      <table-head 
        :columns="columns" 
        :isChecked="isChecked"
        :columnHeader="columnHeader"></table-head>
      <div class="table-body-wrapper">
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <template v-if="isTreeData">
              <div
                class="table-column-box"
                v-for="(item,index) in tableData" 
                :key="index">
                <!-- 存在children的情况 -->
                <table-column 
                  :columns="columns"
                  :defaultExpandAll="defaultExpandAll"
                  :item="item">
                  <!-- 不能在slot上面增加一个template或者div,会出不来 -->
                  <template 
                    v-if="nav.slotScope" 
                    :slot="nav.slotScope"
                    slot-scope="props"
                    class="table-column-box" 
                    v-for="(nav,idx) in columns" 
                    >
                    <div :key="idx">
                      <slot :name="nav.slotScope" :data="props.data"></slot>
                    </div>
                  </template>
                </table-column>
              </div>
            </template>
            <template v-else>
              <tr
                :class="tableBody"
                @click.stop="handleTrClick($event, item, index, tableData)"
                v-for="(item,index) in tableData" 
                :key="index">
                <td width="55px" v-if="isChecked && !isRadio">
                  <div class="cell">
                    <table-checkbox
                      @change="handleSelect($event, item, index, tableData)"
                      :value="!!item.isChecked"></table-checkbox>
                  </div>
                </td>
                <td width="55px" v-if="!isChecked && isRadio">
                  <div class="cell">
                    <table-radio
                      @change="handleRadioSelect($event, item, index, tableData)"
                      name="tableRadio"
                      :value="!!item.isChecked"></table-radio>
                  </div>
                </td>
                <td v-for="(nav, idx) in columns" :key="idx">
                  <div class="cell" v-if="nav.slotScope">
                    <slot :name="nav.slotScope" :data="item"></slot>
                  </div>
                  <div class="cell" v-else>{{ item[nav.prop] }}</div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <npm-com-bg-pagination 
      v-if="showPagination"
      :showTotal="paginationConfig.showTotal"
      :total="paginationConfig.total"
      @pre-click="handlePreClick"
      @next-click="handleNextClick"
      :jump="paginationConfig.showJump"
      :pageSize="paginationConfig.pageSize"
      :background="paginationConfig.showBackground"
      @current-change="handleCurrentPage"
      :currentPage="paginationConfig.currentPage"
      :pageCount="paginationConfig.pageCount"></npm-com-bg-pagination>
  </div>
</template>
<script>
  /* eslint object-curly-spacing: "off" */
  export default from './npm-com-bg-table.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-table.scss";
</style>
