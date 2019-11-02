export default {
  name: 'NpmComBgDialog',
  data () {
    return {
      rendered: false,
    };
  },

  mounted () {
    if (this.visible) {
      this.rendered = true;
      this.open();
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.close = false;
        this.$emit('open');
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0;
        });
      } else {
        if (!this.close) {
          this.$emit('close');
        }
      }
    },
  },

  computed: {
    style() {
      let style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    },
  },

  props: {
    /** 
     * 弹框的标题
    */
    title: {
      type: String,
      default: '',
    },
    /** 
     * 是否显示
    */
    visible: {
      type: Boolean,
      default: false,
    },
    /** 
     * 点击蒙层是否关闭
    */
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    /** 
     * 宽度
    */
    width: String,
    /** 
     * 全屏
    */
    fullscreen: {
      type: Boolean,
      default: false,
    },
    /** 
     * 离顶部的高度
    */
    top: {
      type: String,
      default: '15vh',
    },
    /** 
     * 关闭之前的回调
    */
    beforeClose: Function,
    /** 
     * 是否居中
    */
    center: {
      type: Boolean,
      default: false,
    },
    /** 
     * 额外类
    */
    customClass: {
      type: String,
      default: ''
    },
    /** 
     * 是否显示关闭按钮
    */
    showClose: {
      type: Boolean,
      default: true
    },
  },

  methods: {
    handleClose () {
      if (this.beforeClose) {
        this.beforeClose();
      } else {
        this.hide();
      }
    },

    hide (cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },

    handleWrapperClick () {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },

    afterEnter () {
      this.$emit('opened');
    },

    afterLeave () {
      this.$emit('closed');
    },

    destroyed () {
      if (this.appendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
};
