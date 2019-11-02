## npm-com-bg-button
按钮

## 如何引用

js中

```
import NpmComBgButton from 'npm-com-bg-button'
.....
components: {
  NpmComBgButton
}
.....
```

vue中


```
<npm-com-bg-button 
    @click = "handleSearch" 
    type="primary">
查询
</npm-com-bg-button>

```

> nativeType
```
按钮类型: button submit
```

> type

```
类型: primary, 不写可默认样式
```

> size

```
大小,small 正常大小
```

> icon(类)

```
图标
```
> disabled

```
是否禁用
```

> round

```
是否有圆角按钮
```
> circle

```
是否是圆形按钮(不能包含文字,只能是图标)
```
