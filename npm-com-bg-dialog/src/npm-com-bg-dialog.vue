<template>
  <!-- 后台弹出框组件 -->
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div class="npm-com-bg-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'dialog'"
        class="npm-com-bg-dialog"
        :class="[
          { 'is-fullscreen': fullscreen, 'npm-com-bg-dialog--center': center, },
          customClass,
        ]"
        ref="dialog"
        :style="style">
        <div class = "npm-com-bg-dialog__header">
          <slot name = "title">
            <span class="npm-com-bg-dialog__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="npm-com-bg-dialog__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
              <i class="close-icon"></i>
            </button>
        </div>
        <div class = "npm-com-bg-dialog__body"><slot></slot></div>
        <div class = "npm-com-bg-dialog__footer" v-if="$slots.footer"><slot name="footer"></slot></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default from './npm-com-bg-dialog.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-dialog.scss";
</style>
