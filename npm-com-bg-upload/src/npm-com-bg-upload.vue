<template>
  <!-- 后台上传组件 -->
  <div class="npm-com-bg-upload">
    <div>
      <ul v-if = "imgSrc && imgSrc.length > 0" class="npm-com-bg-upload-list npm-com-bg-upload-list--picture-card">
        <li v-for = "(item, index) of imgSrc" :key="index" tabindex="index" class="npm-com-bg-upload-list__item is-success">
          <img :src = "item" alt="" class="npm-com-bg-upload-list__item-thumbnail">
          <a class="npm-com-bg-upload-list__item-name">
            <i class="npm-com-bg-icon-document"></i>
          </a>
          <label class="npm-com-bg-upload-list__item-status-label">
            <i class="npm-com-bg-icon-upload-success npm-com-bg-icon-check"></i>
          </label>
          <i class="npm-com-bg-icon-close"></i>
          <!-- <i class="npm-com-bg-icon-close-tip"></i> -->
          <span class="npm-com-bg-upload-list__item-actions">
            <span @click = "handlePictureCardPreview(item, index)" class="npm-com-bg-upload-list__item-preview">
              <i class="icon-zoom-in"></i>
            </span>
            <span @click = "handleRemove(item, index)" class="npm-com-bg-upload-list__item-delete">
              <i class="icon-delete"></i>
            </span>
          </span>
        </li>
      </ul>
      <div tabindex="0" class="npm-com-bg-upload--picture-card">
        <i class="icon-plus"></i>
        <input @change = "handleChange" ref="uploadIpt" type="file" name="file" class="npm-com-bg-upload__input ">
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img class = "dialog-img" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default from './npm-com-bg-upload.js';
</script>

<style lang="sass" lang="scss" rel="stylesheet/scss">
  @import "./npm-com-bg-upload.scss";
</style>
