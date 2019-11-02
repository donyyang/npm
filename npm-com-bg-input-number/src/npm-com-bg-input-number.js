import number from 'npm-js-number';

export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    /**
     * 文本框的（初始&最终）值
     */
    value: {
      type: String,
      default: '0',
    },

    /**
     * 自（增/减）的量，每次点击按钮时按照此值（自增/自减）
     */
    step: {
      type: String,
      default: '1',
    },

    /**
     * 小数点位数（默认不处理）
     */
    digit: {
      type: String,
      default: '-1',
    },

    /**
     * 最小值
     */
    minValue: {
      type: String,
      default: null,
    },

    /**
     * 最大值
     */
    maxValue: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      inputValue: null,
    };
  },

  computed: {
    /**
     * 是否禁止自减按钮
     */
    isDisableMinus () {
      // 计算下一次自减后且格式化的值
      let newValue = number.suffixZero(number.minus(this.inputValue, this.step), this.digit);

      // 判断结果
      return this.minValue !== null && new Number(newValue) < new Number(this.minValue);
    },

    /**
     * 是否禁止自增按钮
     */
    isDisablePlus () {
      // 计算下一次自增后且格式化的值
      let newValue = number.suffixZero(number.plus(this.inputValue, this.step), this.digit);

      // 判断结果
      return this.maxValue !== null && new Number(newValue) > new Number(this.maxValue);
    },
  },

  created() {
    this.inputValue = number.suffixZero(this.value, this.digit);
  },

  mounted() {
  },

  beforeDestroy() {
  },

  methods: {
    /**
     * 自减
     */
    minus () {
      // 计算自减后且格式化的值
      let newValue = number.suffixZero(number.minus(this.inputValue, this.step), this.digit);

      // 最小值检测
      if (this.minValue === null || new Number(newValue) >= new Number(this.minValue)) {
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }
    },

    /**
     * 自增
     */
    plus () {
      // 计算自增后且格式化的值
      let newValue = number.suffixZero(number.plus(this.inputValue, this.step), this.digit);

      // 最大值检测
      if (this.maxValue === null || new Number(newValue) <= new Number(this.maxValue)) {
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }
    },

    /**
     * 键盘输入回调
     */
    onInput (event) {
      // 键盘输入的新值
      let newValue = event.target.value;

      // 超出范围
      if (this.minValue !== null && new Number(newValue) < new Number(this.minValue) || this.maxValue !== null && new Number(newValue) > new Number(this.maxValue)) {
        this.inputValue = this.inputValue;

        // 符合范围
      } else {
        newValue = number.suffixZero(newValue, this.digit);
        debugger
        this.inputValue = newValue;
        this.$emit('change', newValue);
      }
      this.$forceUpdate();
    },
  },

  filters: {},

  watch: {},
}
