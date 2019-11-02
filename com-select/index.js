import ElInput from '../com-input/index.vue';
import ElOption from './option.vue';
import ComScrollbar from '../com-scrollbar/index.vue';
// import debounce from 'throttle-debounce/debounce';
import ElSelectMenu from './select-dropdown.vue';
import Emitter from '../../js/emitter.js';
import clickoutside from '../../js/clickoutside.js';

import { getValueByPath, valueEquals, scrollIntoView } from './util.js';

export default {
  name: 'ElSelect',

  componentName: 'ElSelect',

  provide () {
    return {
      select: this,
    };
  },

  directives: {
    clickoutside,
  },

  mixins: [Emitter],

  data () {
    return {
      options: [],
      cachedOptions: [],
      visible: false,
      softFocus: false,
      inputWidth: 0,
      selectedLabel: '',
      currentPlaceholder: '',
      isSilentBlur: false,
      selected: this.multiple ? [] : {},
      query: '',
      hoverIndex: -1,
    };
  },

  mounted () {
    this.handleResize();
  },

  components: {
    ElInput,
    ElSelectMenu,
    ComScrollbar,
    ElOption,
  },

  created() {
    this.$on('handleOptionClick', this.handleOptionSelect);
    this.$on('setSelected', this.setSelected);
  },

  computed: {
    readonly () {
      console.log('readonly===>', this.multiple, this.visible);
      // return this.multiple || this.visible;
      return true;
    },

    showNewOption () {
      let hasExistingOption = this.options.filter(option => !option.created)
        .some(option => option.currentLabel === this.query);
      console.log('newOption====>', this.allowCreate && this.query !== '' && !hasExistingOption)
      return this.allowCreate && this.query !== '' && !hasExistingOption;
    },

    // emptyText() {
    //   if (this.loading) {
    //     return this.loadingText || this.t('el.select.loading');
    //   } else {
    //     if (this.remote && this.query === '' && this.options.length === 0) return false;
    //     if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
    //       return this.noMatchText || this.t('el.select.noMatch');
    //     }
    //     if (this.options.length === 0) {
    //       return this.noDataText || this.t('el.select.noData');
    //     }
    //   }
    //   return null;
    // },
  },

  props: {
    name: String,
    id: String,
    disabled: Boolean,
    multiple: Boolean,
    autocomplete: {
      type: String,
      default: 'off',
    },
    value: {
      required: true,
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    allowCreate: Boolean,
    multipleLimit: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    value(val, oldVal) {
      // 暂时不写多选 this.multiple
      this.setSelected();
      // if (!valueEquals(val, oldVal)) {
      if (this.value !== val) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },

    placeholder(val) {
      this.currentPlaceholder = val;
    },
    
    options () {
      if (this.$isServer) return;
      if (this.multiple) {
        // this.resetInputHeight();
      }
      this.$nextTick(() => {
        this.broadcast('ElSelectDropdown', 'updatePopper');
      });

      this.setSelected();
    },

    visible (val) {
      if (!val) {
        this.broadcast('ElSelectDropdown', 'destroyPopper');
        this.selectedLabel = '';
        if (!this.multiple) {
          if (this.selected) {
            this.selectedLabel = this.selected.currentLabel;
          }
        }
      } else {
        this.broadcast('ElSelectDropdown', 'updatePopper');
      }
    },
  },

  methods: {
    toggleMenu () {
      console.log('toggle====>')
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },

    handleFocus (event) {
      if (!this.softFocus) {
        this.$emit('focus', event);
      } else {
        this.softFocus = false;
      }
    },

    handleResize() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },

    selectOption () {
      if (!this.visible) {
        this.toggleMenu();
      } else if (this.options[this.hoverIndex]) {
        this.handleOptionSelect(this.options[this.hoverIndex]);
      }
    },

    handleOptionSelect (option, byClick) {
      console.log('optionSelect======>', option, byClick);
      if (this.multiple) {
        const value = (this.value || []).slice();
        const optinoIndex = this.getValueIndex(value, option.value);

        if (optionIndex > -1) {
          value.splice(optionsIndex, 1);
        } else if (this.multipleLimit < 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }
        this.$emit('input', value);
        this.emitChange(value);
      } else {
        // 第二次选择,页面会卡死
        this.$emit('input', option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.isSilentBlur = byClick;
      // this.setSoftFocus();
      if (this.visible) {return}
      this.$nextTick(() => {
        this.scrollToOption(option);
      });
    },

    emitChange (val) {
      // if (!valueEquals(this.value, val)) {
      if (this.value !== val) {
        this.$emit('change', val);
      }
    },

    handleClose () {
      this.visible = false;
    },
    // 多选改变input高度
    // resetInputHeight() {
    //   if (!this.$refs.reference) return;
    //   let inputChildNodes = this.$refs.reference.$el.childNodes;
    // },

    setSelected () {
      if (!this.multiple) {
        let option = this.getOption(this.value);
        // if (option.created) {
        //   this.createdLabel = option.currentLabel;
        //   this.createdSelected = true;
        // } else {
        //   this.createdSelected = false;
        // }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        return;
      }
      let result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(value => {
          result.push(this.getOption(value));
        });
      }
      this.selected = result;
      // this.$nextTick(() => {
      //   this.resetInputHeight();
      // })
    },

    getOption (value) {
      let option;
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]';
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]';
      // cachedOptions 变为 options
      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i];
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
          : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) {
        return option;
      }
      const label = !isObject && !isNull && !isUndefined
        ? value : '';
      let newOption = {
        value,
        currentLabel: label,
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },

    handleBlur (event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false;
        } else {
          this.$emit('blur', event);
        }
      }, 50);
      this.softFocus = false;
    },

    handleMenuEnter () {
      this.$nextTick(() => this.scrollToOption(this.selected));
    },

    scrollToOption (option) {
      const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector('.com-select-dropdown__wrap');
        scrollIntoView(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },

    onOptionDestroy(index) {
      if (index > -1) {
        // this.optionsCount--;
        // this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },

    doDestroy () {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },

    handleClickOutSide(el) {
      this.visible = false;
    },

  },
};
