export default {
  data() {
    return {}
  },

  props: {
    columns: {
      type: Array,
      default: () => ([])
    },

    columnHeader: {
      type: String,
      default: 'column-header'
    },

    isChecked: {
      type: Boolean,
      default: false,
    },

    /** 
      * 是否是树形结构
    */
    isTreeData: {
      type: Boolean,
      default: true,
    },
  },

  methods: {

  },
}