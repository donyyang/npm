<template>
  <label 
    class="checkbox"
    :class="[
      {'is-disabled': isDisabled},
      {'is-checked': isChecked}
    ]"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    role="checkbox"
  >
    <span
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked
      }"
      class="checkbox-input"
    >
      <span class="checkbox-inner"></span>
      <input
        class="checkbox-original"
        type="checkbox"
        aria-hidden="true"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="checkbox__label" @keydown.stop>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>


