import Bar from './bar.vue';
import scrollbarWidth from './scrollbar-width.js';
import { toObject } from './util';

export default {
  name: 'ElScrollbar',
  components: {
    Bar,
  },
  
  data () {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0,
    };
  },

  mounted () {
  },

  computed: {
    gutter() {
      return scrollbarWidth();
    },

    wrap() {
      return this.$refs.wrap;
    },

    style() {
      let style = this.wrapStyle;
      let gutter = scrollbarWidth();

      if (gutter) {
        const gutterWith = `-${gutter}px`;
        const gutterStyle = `margin-bottom: ${gutterWith}; margin-right: ${gutterWith};`;

        if (Array.isArray(this.wrapStyle)) {
          style = toObject(this.wrapStyle);
        } else if (typeof this.wrapStyle === 'string') {
          style += gutterStyle;
        } else {
          style = gutterStyle;
        }
      }

      return style;
    }
  },

  props: {
    wrapClass: {},
    wrapStyle: {},
    native: Boolean,
  },

  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    },

    handleScroll() {
      const wrap = this.wrap;

      this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
      this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
    },
  },
};
