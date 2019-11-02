# npm-com-bg-upload
用于图片上传
### 使用方法

```
     <npm-com-bg-upload
        @emit-delete="handleDelete"
        @emit-pic="handleIcon"
        :imgSrc="formMenu.menuIcon"
      ></npm-com-bg-upload>
```


### Props


名称 | 默认值 | 描述
---|--- | ---
imgSrc | [] | 存放图片的数组
isMultiple| false | 是否支持一次上传多张图片

### events

名称 | 属性 |描述
---|--- | ---
emit-delete | （imgSrc, index） | 删除图片时的emit事件
emit-pic |（URL）| 上传图片时的emit事件
