<template>
  <div
    class="com-select"
    v-clickoutside="handleClickOutSide"
    @click.stop="toggleMenu"
  >
    <!-- 远程搜索需要,暂时不做 -->
    <!-- <input uuid="b4991751-38fc-4274-a92c-67efe2b220e2" 
      type="text"
      class="com-select__input"
      :disabled="disabled"
      :autocomplete='autocomplete'
      @focus="handleFocus"
      @blur="softFocus = false"
      @click.stop
    > -->
    <el-input
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :id="id"
      :autocomplete='autocomplete'
      :disabled="disabled" 
      :readonly="readonly"
      :validate-event="false"
      @keydown.native.enter.prevent="selectOption"
      :class="{ 'is-focus': visible }"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.native.esc.stop.prevent="visible = false"
    >
    </el-input>
    <transition uuid="ec16e9a0-d9fa-409a-905a-31310e8d4c62" 
      name="el-zoom-in-top"
      @before-enter="handleMenuEnter"
      @after-leave="doDestroy"
    >
      <el-select-menu
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible"
      >
        <com-scrollbar
          tag="ul"
          wrap-class="com-select-dropdown__wrap"
          view-class="com-select-dropdown__list"
          ref="scrollbar"
          :class="{ 'is-empty': !allowCreate && query }"
        >
          <el-option
            :value="query"
            created
            v-if="showNewOption"
            >
          </el-option>
          <slot></slot>
        </com-scrollbar>
      </el-select-menu>
    </transition>
  </div>
</template>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import './index.scss';
</style>

<script>
  /* eslint object-curly-spacing: "off" */
  export default from './index.js';
</script>
