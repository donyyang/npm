import ossUpload from 'npm-js-web-oss';

export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
    };
  },
  mounted () {
  },
  components: {
    'el-dialog': require('npm-com-bg-dialog').default,
  },
  props: {
    /** 
     * 图片list
    */
    imgSrc: {
      type: Array,
      default () {
        return [];
      },
    },
    /** 
     * 是否多张图片
    */
    isMultiple: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleRemove (item, index) {
      this.$emit('emit-delete', this.imgSrc, index);
    },

    handlePictureCardPreview (item, index) {
      this.dialogImageUrl = item;
      this.dialogVisible = true;
    },

    handleChange () {
      let inputDom = this.$refs.uploadIpt;
      let param = {
        resourceType: 'pic',
        platform: 'fe',
        purpose: 'test',
      };
      ossUpload.upload(inputDom.files[0], param).then(url => {
        this.$emit('emit-pic', url);
      });
    },
  },
};

