export default {
  props: {
    /**
     * 图标（取值范围为./icon/xxx.png中的basename）
     */
    icon: {
      type: String,
      default: null,
    },

    /**
     * 标签
     */
    label: {
      type: String,
      default: null,
    },

    /**
     * 跨度（占用几列，取值范围：1-10）
     */
    span: {
      type: String,
      default: '1',
    },

    /** 
     * 是否必填项
    */
    isRequired: {
      type: Boolean,
      default: false,
    },
    /** 
     * 是否是块级
    */
    isBlock: {
      type: Boolean,
      default: false,
    },
    /** 
     * 高度不固定
    */
    heightAuto: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  computed: {},

  created() {
  },

  mounted() {
  },

  beforeDestroy() {
  },

  methods: {},

  filters: {},

  watch: {},
}
