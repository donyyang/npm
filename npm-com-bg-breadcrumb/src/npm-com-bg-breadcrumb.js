export default {
  name: 'npmComBgBreadcrumb',

  provide() {
    return {
      npmComBgBreadcrumb: this,
    }
  },

  data() {
    return {
      // separator: '',
      // separatorClass: '',
    }
  },

  components: {
    'npm-com-bg-breadcrump-item': require('./com/breadcrump-item.vue').default,
  },

  props: {
    /** 
     * 图标分隔符
    */
    separator: {
      type: String,
      default: ''
    },
    /** 
     * 是否需要显示类
    */
   isShowClass: {
     type: Boolean,
     default: true,
   },
    /** 
     * 图标分隔符类
    */
    separatorClass: {
      type: String,
      default: 'separatorClass'
    },
    /** 
     * list:[{
     *   to: '', // 跳转链接
     *   name: '', // 面包屑名称
     *   replace: true/false, // 是否跳转
     * }]
    */
    navList: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {

  },
}