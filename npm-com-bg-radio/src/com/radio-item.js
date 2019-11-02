import Emitter from '../js/emitter.js';

export default {
  name: 'npmComBgRadioItem',

  componentName: 'npmComBgRadioItem',

  inject: {
    ComForm: {
      default: '',
    },
    ComFormItem: {
      default: '',
    },
  },

  mixins: [Emitter],

  data () {
    return {
      focus: false,
    };
  },

  mounted () {
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
  },

  computed: {
    isGroup () {
      let parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'npmComBgRadio') { // eslint-disable-line
          parent = parent.$parent;
        } else {
          this._radioGroup = parent; // eslint-disable-line
          return true;
        }
      }
      return false;
    },

    model: {
      get () {
        return this.isGroup ? this._radioGroup.value : this.value; // eslint-disable-line
      },
      set (val) {
        if (this.isGroup) {
          this.dispatch('npmComBgRadio', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
      },
    },

    isDisabled () {
      return this._radioGroup ? this._radioGroup.disabled || this.disabled || (this.comForm || {}).disabled // eslint-disable-line
        : this.disabled || (this.comForm || {}).disabled;
    },

    tabIndex () {
      return this.isDisabled || this.isGroup && this.model !== this.label ? -1 : 0;
    },
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup && this.dispatch('npmComBgRadio', 'handleChange', this.model); // eslint-disable-line
      });
    },
  },
};
