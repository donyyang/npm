import Emitter from './js/emitter.js';

export default {
  name: 'npmComBgRadio',

  componentName: 'npmComBgRadio',

  mixins: [Emitter],

  inject: {
    comFormItem: {
      default: '',
    },
  },

  // model: {
  //   prop: 'value',
  //   event: 'change'
  // },

  components: {
    'npm-com-bg-radio-item': require('./com/radio-item.vue').default,
  },

  created() {
    this.$on('handleChange', value => {
      this.$emit('change', value);
    })
  },

  props: {
    /** 
     * list
    */
   radioList: {
      type: Array,
      default: () => [],
    },
    /** 
     * radio的值
    */
    // value: {
    //   type: [Number, String],
    //   default: '',
    // },
    value: {},
    /** 
     * 是否禁用
    */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** 
     * 显示的value
    */
    labelkey: {
      type: String,
      default: 'label',
    },
    /** 
     * 显示的label
    */
    labelvalue: {
      type: String,
      default: 'value',
    },
    /** 
     * 是否带边框
    */
    border: {
      type: Boolean,
      default: false,
    }
  },

  watch: {
    value(value) {
      this.dispatch('ComFormItem', 'com.form.change', [this.value]);
    }
  },
}
