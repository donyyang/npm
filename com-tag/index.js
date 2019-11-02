export default {
  name: 'ElTag',
  data () {
    return {
    };
  },

  mounted () {
  },

  computed: {

  },

  props: {
    color: String,
    type: String,
    size: String,
    closable: Boolean,
  },
  methods: {
    handleClick (evt) {
      evt.stopPropagation();
      this.$emit('click', evt);
    },

    handleTagClose (evt) {
      evt.stopPropagation();
      this.$emit('close', event);
    },
  },
};
