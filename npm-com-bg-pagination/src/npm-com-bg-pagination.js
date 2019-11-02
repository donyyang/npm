export default {
  props: {
    /**
     * @desc 总数,是否显示总数
     */
    total: {
      type: Number,
      default: 0,
    },
    /** 
     * 是否显示总数
    */
    showTotal: {
      type: Boolean,
      default: false,
    },
    /** 
     * 每页显示总条目个数
    */
    pageSize: {
      type: Number,
      default: 10,
    },
    /** 
     * 总页数
    */
    pageCount: {
      type: Number,
      default: 0,
    },
    /** 
     * 是否禁用
    */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 
     * 当前页数
    */
    currentPage: {
      type: Number,
      default: 1,
    },
    /** 
     * 页码按钮的数量
    */
    pagerCount: {
      type: Number,
      validator(value) {
        return value > 4 && value < 22 && (value % 2) === 1;
      },
      default: 7,
    },
    /** 
     * 是否显示跳转功能
    */
    jump: {
      type: Boolean,
      default: false,
    },
    /** 
     * 是否有背景
    */
    background: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 10,
    };
  },

  computed: {
    internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.max(1, Math.ceil(this.total / this.pageSize))
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }

      return null;
    },
  },

  watch: {
    currentPage: {
      // 最初时候watch就执行
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      },
    },

    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val;
      }, 
    },
  },

  components: {
    'com-pager': require('./com/pager.vue').default,
  },

  created() {
  },

  mounted() {
  },

  beforeDestroy() {
  },

  methods: {
    // 点击当前页
    handleChangePage (val) {
      this.internalCurrentPage = val;
      this.emitChange();
    },
    // 点击前一页按钮
    handlePre () {
      if (this.disabled || this.internalCurrentPage <= 1) return;
      this.internalCurrentPage = this.internalCurrentPage - 1;
      this.$emit('pre-click', this.internalCurrentPage);
      this.emitChange();
    },
    // 点击后一页按钮
    handleNext () {
      if (this.disabled || this.internalCurrentPage >= this.internalPageCount) return;
      this.internalCurrentPage = this.internalCurrentPage + 1;
      this.$emit('next-click', this.internalCurrentPage);
      this.emitChange();
    },

    emitChange () {
      this.$nextTick(() => {
        this.$emit('current-change', this.internalCurrentPage);
      })
    },

    // 输入框发生变化
    handleIptChange (e) {
      let val = Number(e.target.value);
      this.internalCurrentPage = val;
      this.emitChange();
    },
  },
}
