export default {
  name: 'tableColumn',

  data () {
    return {
      isShow: true,
    }
  },

  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    tableData: {
      type: Array,
      default: () => ([])
    },
    item: {
      type: Object,
      default: null,
    },
    /** 
     * body的类
    */
    tableBody: {
      type: String,
      default: ''
    },
    /** 
     * 是否显示多选
    */
    isChecked: {
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
      default: false,
    },
    /** 
     * 层级
    */
    indent: {
      type: Number,
      default: 0,
    },
  },

  components: {
  },

  computed: {
    expandAll () {
      return this.defaultExpandAll && this.isShow;
    },
  },

  mounted() {
    this.$nextTick(() => {
      
    })
  },

  methods: {
    handleArrow(item) {
      let refs = `columns-${item.indent}`;
      this.isShow = !this.isShow;
      this.$refs[refs].style.display = this.expandAll ? 'contents' : 'none';
    }
  },
}