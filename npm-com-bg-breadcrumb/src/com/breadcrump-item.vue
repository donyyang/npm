<template>
  <span class="npm-com-bg-breadcrumb__item">
    <span
      :class="[
        'npm-com-bg-breadcrumb__inner', 
        to ? 'is-link' : '',
        index === navListLen - 1 ? 'current-breadcrumb' : '',
      ]"
      ref='link'
    >
      {{ breadName }}
    </span>
    <i v-if="isShowClass && index !== navListLen - 1" :class="separatorClass" class="npm-com-bg-breadcrumb__separator"></i>
    <span v-else class="npm-com-bg-breadcrumb__separator">{{ index === navListLen - 1 ? '' : separator }}</span>
  </span>
</template>


<script>
  export default from './breadcrump-item.js';
</script>
