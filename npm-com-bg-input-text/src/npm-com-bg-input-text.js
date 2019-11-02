export default {
  name: 'npm-com-bg-input',

  componentName: 'npm-com-bg-input',

  data () {
    return {
      passwordVisible: false,
      focused: false,
      isComposing: false,
      timer: null,
    };
  },

  mounted () {
    this.setNativeInputValue();
  },

  watch: {
    nativeInputValue () {
      this.setNativeInputValue();
    },
  },

  computed: {
    // 清空
    showClear () {
      return this.clearable && !this.readonly && this.focused;
    },

    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value); // eslint-disable-line
    },
    // 显示密码icon
    showPwdVisible () {
      return this.showPassword && !this.readonly && !this.disabled && this.focused;
      // return this.showPassword && !this.readonly && !this.disabled;
    },

    inputSize() {
      return this.size;
    },
  },

  props: {
    /** 
     * input 值
    */
    value: [String, Number],
    /** 
     * 是否禁用
    */
    disabled: Boolean,
    /** 
     * 是否只读
    */
    readonly: Boolean,
    /** 
     * placeholder
    */
    placeholder: {
      type: String,
      default: '请输入'
    },
    /** 
     * 是否显示密码
    */
    showPassword: {
      type: Boolean,
      default: false,
    },
    /** 
     * 是否清空
    */
   clearable: {
     type: Boolean,
     default: false,
   },
    /** 
     * 大小 暂时不用
    */
    size: String,
    /** x
     * 类型 text, textera
    */
    type: {
      type: String,
      default: 'text',
    },
    /** 
     * 是否启用自动完成功能
    */
    autocomplete: {
      type: String,
      default: 'off',
    },
    /** 
     * 标签描述
    */
    label: String,
    /** 
     * input 索引
    */
    tabindex: String,
    /** 
     * 格式
    */
    formate: {
      type: String,
      default: '',
    }
  },

  methods: {
    // 聚焦方法
    focus () {
      this.getInput().focus();
      this.focused = true;
    },
    // 失焦
    blur () {
      this.getInput().blur();
    },
    /** 
     * 类似keydow 参考(https://developer.mozilla.org/zh-CN/docs/Web/Events/compositionstart)
    */
    handleCompositionStart () {
      this.isComposing = true;
    },

    handleCompositionEnd (event) {
      this.isComposing = false;
      this.handleInput(event);
    },
    // input 事件
    handleInput (event) {
      if (this.isComposing) {
        return;
      }
      if (this.formate == 'phone') {
        event.target.value = event.target.value.replace(/\D/ig, '');
        event.target.value = event.target.value.substring(0, 11);
      }

      if (this.formate == 'number') {
        event.target.value = event.target.value.replace(/\D/ig, '');
      }
      this.$emit('input', event.target.value);
    },

    handleFocus (event) {
      this.focused = true;
      this.$emit('focus', event);
    },

    handleBlur (event) {
      this.focused = false;
      let value = event.target.value;
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/ig;
      switch (this.formate) {
        case 'email':
          if (!reg.test(value)) {
            event.target.value = '';
          }
          break;
        default:
        event.target.value = value;
      }
      this.$emit('blur', event);
    },

    handleChange (event) {
      this.$emit('change', event.target.value);
    },
    // 是否显示密码
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible;
      this.focus();
    },
    // 将blur触发放到点击事件之后,详情(https://www.jb51.net/article/112086.htm)
    handleMouseDown (e) {
      e.preventDefault();
    },

    setNativeInputValue () {
      const input = this.getInput();
      if (!input) {
        return;
      }
      if (input.value === this.nativeInputValue) {
        return;
      }
      input.value = this.nativeInputValue;
    },

    getInput () {
      return this.$refs.input || this.$refs.textarea;
    },

    // 清空
    clear () {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
    },
  },
};
