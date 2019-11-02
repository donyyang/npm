<template>
  <div 
    :ref="'columns-'+item.indent"
    :class="[ `columns-${item.indent}` ]" 
    class="table-column-box">
    <tr
      class="expanded">
      <td v-for="(nav, idx) in columns" :key="idx">
        <div class="cell">
          <span 
            v-if="idx === 0" 
            :style="{ 'padding-left': 25 * item.indent + 'px' }"></span>
          <i 
            @click="handleArrow(item)"
            v-if="item[isChildren] && idx === 0" 
            class="table-arrow"
            :class="{ 'table-arrow-show': !expandAll }"
            ></i>
          <template class="table-arrow-box" v-if="nav.slotScope">
            <slot :name="nav.slotScope" :data="item"></slot>
          </template>
          <template class="table-arrow-box" v-else>
            {{ item[nav.prop] }}
          </template> 
        </div>
      </td>
    </tr>
    <div 
      class="table-column-box" 
      :ref="'columns-'+item.indent" 
      v-if="item[isChildren]">
      <div
        :class="[ `columns-${item.indent}` ]"
        class="table-column-box"
        v-for="(i,j) in item[isChildren]" 
        :key="j">
        <table-column 
          :indent="item.indent"
          :columns="columns"
          :defaultExpandAll="defaultExpandAll"
          :item="i">
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
    </div>
  </div>
</template>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./index.scss";
</style>
