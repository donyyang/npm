<template>
  <!-- 后台input组件 -->
 <div  :class="[
    type === 'textarea' ? 'npm-com-bg-textarea' : 'npm-com-bg-input',
    inputSize ? 'npm-com-bg-input--' + inputSize : '',
    {
      'is-disabled': disabled,
    }]"
  >
    <template v-if="type !== 'textarea'">
      <input
        :tabindex="tabindex"
        v-bind="$attrs"
        :placeholder='placeholder'
        :autocomplete='autocomplete'
        :readonly="readonly"
        v-if="type !== 'textarea'"
        class = 'npm-com-bg-input__inner'
        :disabled='disabled'
        ref="input"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        :aria-label="label"
      >
      <span
        class='npm-com-bg-input__suffix'
        v-if='showClear || showPassword'
      >
        <span class="npm-com-bg-input__suffix-inner">
          <i
            v-if = "showClear"
            @mousedown="handleMouseDown"
            class="npm-com-bg-input__icon npm-com-bg-input__clear"
            @click="clear"
          ></i>
          <i v-if="showPwdVisible"
            @mousedown="handleMouseDown"
            class="npm-com-bg-input__icon npm-com-bg-input__showPwd"
            @click="handlePasswordVisible"
          ></i>
        </span>
      </span>
    </template>
    <textarea
      v-else
      ref='textarea'
      v-bind="$attrs"
      :placeholder='placeholder'
      :disabled='disabled'
      :aria-label="label"
      :tabindex="tabindex"
      class="npm-com-bg-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      :readonly="readonly"
      :autocomplete="autocomplete"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    ></textarea>
  </div>
</template>

<script>
  export default from './npm-com-bg-input.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-input-text.scss";
</style>
