<template>
  <div uuid="36f34dd8-2f5c-4750-a8f3-5af698b537b9" class="com-scrollbar">
    <div uuid="8fd8e82c-fda4-4e99-a7fd-14cbe1071480" v-if="native">
      <div
        ref="wrap"
        class="el-scrollbar__wrap"
        :class="[wrapClass]"
        onScroll={ this.handleScroll }
        :style="{ style }"
      >
        <Bar
          :move="moveX"
          :size="sizeWidth"></Bar>,
        <Bar
          vertical
          :move="moveY"
          :size="sizeHeight"></Bar>
      </div>
    </div>
    <div uuid="957cabb4-9be7-435a-9936-30906041f288" v-else>
      <div uuid="d3d66528-d196-42f5-aed0-4f0c0ce37eee" 
        ref="wrap"
        class='el-scrollbar__wrap'
        :class="[
          wrapClass,
          gutter ? '' : 'el-scrollbar__wrap--hidden-default'
        ]"
        :style="{ style }"
      >

      </div>
    </div>
  </div>
</template>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './index.scss';
</style>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>
