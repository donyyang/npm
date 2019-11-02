import clickoutside from '../../js/clickoutside.js';
import Emitter from '../../js/emitter.js';

export default {
  name: 'ElDropDown',

  componentName: 'ElDropdown',

  data () {
    return {
      visible: false,
      triggerElm: null,
      dropdownElm: null,
    };
  },

  mixins: [Emitter],

  directives: { clickoutside },

  provide() {
    return {
      dropdown: this,
    }
  },

  mounted () {
    this.$on('menu-item-click', this.handleMenuItemClick);
  },

  computed: {
    dropdownSize() {
      return this.size;
    }
  },

  watch: {
    visible(val) {
      this.broadcast('ElDropdownMenu', 'visible', val);
      // 暴露出来的下拉框隐藏显示时触发.
      this.$emit('visible-change', val);
    }
  },

  props: {
    placement: {
      type: String,
      default: 'bottom-end'
    },
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    size: {
      type: String,
      default: '',
    },
  },
  methods: {
    initDomOperation() {
      this.dropdownElm = this.popperElm;

      this.initEvent();
    },

    initEvent() {
      this.triggerElm = this.$slots.default[0].elm;
      let { trigger, handleDropdownShow, handleDropdownHide, handleClick, } = this;
      let dropdownElm = this.dropdownElm;
      if (trigger === 'hover') {
        this.triggerElm.addEventListener('mouseenter', handleDropdownShow);
        this.triggerElm.addEventListener('mouseleave', handleDropdownHide);
        dropdownElm.addEventListener('mouseenter', handleDropdownShow);
        dropdownElm.addEventListener('mouseleave', handleDropdownHide);
      } else if (trigger === 'click') {
        this.triggerElm.addEventListener('click', handleClick);
      }
    },

    handleClick() {
      if (this.triggerElm.disabled) return;
      this.visible ? this.handleDropdownHide() : this.handleDropdownShow();
    },

    handleDropdownShow (evt) {
      this.visible = true;
    },

    handleDropdownHide (evt) {
      this.visible = false;
    },

    handleMenuItemClick (command, instance) {
      console.log('command======>', command, instance)
      if (this.hideOnClick) {
        this.visible = false;
      }
      this.$emit('command', command, instance);
    },
  },
};
