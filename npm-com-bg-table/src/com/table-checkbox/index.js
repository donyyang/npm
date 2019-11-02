export default {
  name: 'NpmComBgCheckboxItem',

  componentName: 'NpmComBgCheckboxItem',

  // mixins: [Emitter],

  data () {
    return {
      focus: false,
      selfModel: false,
    };
  },

  mounted () {
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    trueLabel: [Number, String],
    falseLabel: [Number, String],
  },

  computed: {
    model: {
      get () {
        return !!this.value ? this.value : this.selfModel;
      },
      set (val) {
        this.$emit('input', val);
        this.selfModel = val;
        // this.$refs.checkbox && (this.$refs.checkbox.checked = this.model == this.label);
      },
    },

    isChecked () {
      if (Array.prototype.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (!!this.model) {
        return this.model === this.trueLabel;
      }
    },

    isDisabled () {
      return this.disabled || (this.comForm || {}).disabled;
    },

    tabIndex () {
      return this.isDisabled;
    },
  },

  created() {
  },

  methods: {
    handleChange (e) {
      let value;
      if (e.target.checked) {
        value = !!this.trueLabel ? this.trueLabel : true;
      } else {
        value = !!this.falseLabel ? this.falseLabel : false;
      }
      this.$emit('change', value, e);
    },
  },
};
