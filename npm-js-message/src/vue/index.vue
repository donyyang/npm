<template>
  <!-- 后台消息提示组件 -->
  <transition name="com-message-fade" @after-leave="handleAfterLeave">
      <div
      :class="[
        'com-message',
        type && !iconClass ? `com-message--${ type }` : '',
        customClass
      ]"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="dangerouslyUseHTMLString" class="com-message__content">{{ message }}</p>
        <p v-else v-html="message" class="com-message__content"></p>
      </slot>
    </div>
  </transition>
</template>

<script>
  // export default from './npm-com-bg-message.js';
  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  }
  export default {
    data () {
      return {
        visible: '',
        message: '',
        duration: 3000,
        type: 'info',
        onClose: null,
        closed: false,
        verticalOffset: 20,
        iconClass: '',
        customClass: '',
        timer: null,
        dangerouslyUseHTMLString: false,
      };
    },

    mounted () {
      this.startTimer();
    },

    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
        }
      }
    },

    computed: {
      typeClass() {
        return this.type && !this.iconClass
          ? `com-message__icon com-icon-${ typeMap[this.type] }`
          : '';
      },

      positionStyle() {
        return {
          'top': `${ this.verticalOffset }px`
        };
      }
    },

    props: {
      
    },
    methods: {
      handleAfterLeave() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },

      clearTimer() {
        clearTimeout(this.timer);
      },

      close() {
        this.closed = true;
        if(typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
    },
  };
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./index.scss";
</style>
