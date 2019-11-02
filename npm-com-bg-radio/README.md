# npm-com-bg-radio
单选组件

### 使用方法

```
<npm-com-bg-radio 
    :radioList="menuTypeList"
     v-model="formMenu.menuType">
 </npm-com-bg-radio>
```


### props

名称| 默认值 | 描述
---|--- |---
radioList | [] | 用于渲染的数据
disabled | false | 是否禁用
labelkey | 'label' | 显示值字段名
labelvalue | 'value' | 值的字段名
border | false | 是否显示边框

