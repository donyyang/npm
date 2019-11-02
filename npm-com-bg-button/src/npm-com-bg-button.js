export default {
  // name: 'ElButton',
  data () {
    return {
    };
  },

  mounted () {
  },

  computed: {

  },

  props: {
    /**
     * 按钮类型: button submit
     */
    nativeType: {
      type: String,
      default: 'button',
    },
    /**
     * 类型: primary, 不写可默认样式
     */
    type: {
      type: String,
      default: 'default',
    },
    /**
     * 大小,small 正常大小
     */
    size: String,
    /**
     * 图标
     */
    icon: {
      type: String,
      default: '',
    },
    /** 
     * 是否禁用
    */
    disabled: Boolean,
    /** 
     * 是否有圆角按钮
    */
    round: Boolean,
    /** 
     * 是否有圆形按钮(不能包含文字,只能是图标)
    */
    circle: Boolean,
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    },
  },
};
