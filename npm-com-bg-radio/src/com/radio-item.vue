<template>
  <label
    class="npm-com-bg-radio"
    :class="[
      {'is-disabled': isDisabled},
      {'is-border': border},
      {'is-checked': model === label}
    ]"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    role="radio"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="npm-com-bg-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="npm-com-bg-radio__inner"></span>
      <input
        class="npm-com-bg-radio__original"
        v-model="model"
        type="radio"
        :value="label"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="npm-com-bg-radio__label" @keydown.stop>
      <slot></slot>
    </span>
  </label>
</template>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './radio-item.js';
</script>
