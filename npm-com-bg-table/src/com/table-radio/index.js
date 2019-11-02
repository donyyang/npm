
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

  data () {
    return {
      focus: false,
    };
  },

  mounted () {
  },

  props: {
    value: {},
    label: {
      type: Boolean,
      default: true,
    },
    disabled: Boolean,
    name: String,
    border: Boolean,
  },

  computed: {
    model: {
      get () {
        return this.value; // eslint-disable-line
      },
      set (val) {
        this.$emit('input', val);
      },
    },

    isDisabled () {
      return this.disabled || (this.comForm || {}).disabled;
    },

    tabIndex () {
      return this.isDisabled || 0;
    },
  },

  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model);
      });
    },
  },
};
