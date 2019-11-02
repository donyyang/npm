export default {
  props: {
    // /**
    //  * @desc 属性作用说明
    //  */
    columns: {
      type: Array,
      default: () => ([])
    },
    tableData:{
      type:Array,
      default: () => ([])
    },
    /** 
     * 是否多选
    */
    isChecked: {
      type: Boolean,
      default: false,
    },
    /** 
     * 是否单选
    */
    isRadio: {
      type: Boolean,
      default: false,
    },
    /** 
     * body的类
    */
    tableBody: {
      type: String,
      default: ''
    },
    /** 
     * head的类
    */
    columnHeader: {
      type: String,
      default: ''
    },
    /** 
      * 点击表格的一行是否要选中
    */
    isRowClick: {
      type: Boolean,
      default: false,
    },
    /** 
      * 是否是树形结构
    */
    isTreeData: {
      type: Boolean,
      default: false,
    },
    /** 
     * 子节点的key值,默认children
    */
    isChildren: {
      type: String,
      default: 'children',
    },
    /** 
     * treeData是否默认展开
    */
    defaultExpandAll: {
      type: Boolean,
      default: true,
    },
    /** 
     * 是否显示分页
    */
    showPagination: {
      type: Boolean,
      default: false,
    },
    /**
     * 分页信息
     * showTotal:是否显示总数
     * showJump: 是否显示跳转
     * showBackground:是否带背景
    */
    paginationConfig: {
      type: Object,
      default: () => ({
        total: 0,
        pageSize: 10,
        pageCount: 0,
        currentPage: 0,
        showTotal: false,
        showJump: false,
        showBackground: false,
      }),
    }
  },

  data() {
    return {
      multipleSelection:[],
      newData: [],
    };
  },

  computed: {
    slotColumns () {
      let newColumns = this.columns.filter((item,index) => {
        return !!item.slotScope;
      });

      return newColumns || [];
    },

    // data: {
    //   get () {
    //     console.log('getdata======>', data);
    //     return this.newData.length ? this.newData : this.tableData;
    //   },
    //   set (data) {
    //     console.log('data======>', data);
    //     this.newData = data;
    //   },
    // },
  },

  watch: {
    // tableData: {
    //   immediate: true,
    //   handler(data) {
    //     let indent = 0;
    //     let fun = (list, layer) => {
    //       list.map((item,index) => {
    //         this.$set(item, 'indent', layer);
    //         if (item[this.isChildren]) {
    //           fun(item[this.isChildren], layer+1);
    //         }
    //       })
    //     }
    //     fun(data, 0);
    //   },
    // },
  },

  components: {
    'table-column':require('./com/table-column/index.vue').default,
    'npm-com-bg-pagination': require('npm-com-bg-pagination').default,
    'table-head':require('./com/table-head/index.vue').default,
    'table-checkbox':require('./com/table-checkbox/index.vue').default,
    'table-radio':require('./com/table-radio/index.vue').default,
  },

  created() {
  },

  mounted() {
    // 改变一下传过来的tableData
    this.changeData();
  },

  beforeDestroy() {
  },

  methods: {
    changeData() {
      let indent = 0;
      let fun = (list, layer) => {
        list.map((item,index) => {
          this.$set(item, 'indent', layer);
          if (item[this.isChildren]) {
            fun(item[this.isChildren], layer+1);
          }
        })
      }
      fun(this.tableData, 0);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 点击表格
    handleTrClick (e, tr, index, data) {
      e.stopPropagation();
      this.$emit('row-click', tr, index, data);
      // 多选
      if (this.isRowClick && this.isChecked) {
        let isChecked = !tr.isChecked;
        this.selectChange(isChecked, tr, index, data);
      }
      // 单选
      if (this.isRowClick && this.isRadio) {
        let isChecked = tr.isChecked;
        if (isChecked) return;
        isChecked = !tr.isChecked;
        this.selectRadioChange(isChecked, tr, index, data);
      }
    },
    // 点击单选
    handleRadioSelect (isChecked, tr, index, data) {
      this.selectRadioChange(isChecked, tr, index, data);
    },
    // 单选发生变化
    selectRadioChange (isChecked, tr, index, data) {
      let selectedItem = null;
      data.map((item,idx) => {
        this.$set(item, 'isChecked', idx === index);
        if (idx === index) {
          selectedItem = item;
        }
      });
      this.tableData = data;
      this.$emit('selection-change', [selectedItem]);
    },
    // 点击多选
    handleSelect (isChecked, tr, index, data) {
      this.selectChange(isChecked, tr, index, data);
    },
    // 多选发生变化
    selectChange (isChecked, tr, index, data) {
      let selectedArr = [];
      for(let i = 0, len = data.length; i < len; i++) {
        if (index === i) {
          this.$set(data[i], 'isChecked', !!isChecked);
          break;
        }
      }
      this.tableData = data;
      selectedArr = data.filter((item, index) => {
        return !!item.isChecked;
      });

      console.log('selectedArr', selectedArr);
      this.$emit('selection-change', selectedArr);
    },
    // 点击箭头
    handleArrow () {

    },
    // 页数改变
    handleCurrentPage(val) {
      this.$emit('current-change', val);
    },
    // 上一页
    handlePreClick(val) {
      this.$emit('pre-click', val);
    },
    // 下一页
    handleNextClick(val) {
      this.$emit('next-click', val);
    },
  },
}
