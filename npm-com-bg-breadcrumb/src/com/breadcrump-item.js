export default {
  name: 'npmComBgBreadcrumpItem',

  inject: ['npmComBgBreadcrumb'],

  props: {
    /** 
     * 跳转的链接
    */
    to: {
      type: String,
      default: '',
    },
    /** 
     * 是否添加记录
    */
    replace: {
      type: Boolean,
      default: true,
    },
    /** 
     * 面包屑名称
    */
    breadName: {
      type: String,
      default: '',
    },
    /** 
     * 索引
    */
   index: {
     type: Number,
     default: 0
   },
  },

  data() {
    return {
      separator: '',
      separatorClass: '',
      navListLen: 0,
      isShowClass: false,
    }
  },

  mounted () {
    this.separator = this.npmComBgBreadcrumb.separator;
    this.separatorClass = this.npmComBgBreadcrumb.separatorClass;
    this.isShowClass = this.npmComBgBreadcrumb.isShowClass;
    this.navListLen = this.npmComBgBreadcrumb.navList && this.npmComBgBreadcrumb.navList.length || 0;
    const link = this.$refs.link;
    link.addEventListener('click', () => {
      const { to, $router } = this;
      if (!to || !$router) {
        return;
      }
      this.replace ? $router.replace(to) : $router.push(to);
    }, false);
  }
}