## npm-com-bg-dialog
dialog组件

## 如何引用

js中

```
import NpmComBgDialog from 'npm-com-bg-dialog'
.....
components: {
  NpmComBgDialog
}
.....
```

vue中


```
<npm-com-bg-dialog 
    :title="memDialogTips" 
    custom-class="dept-dialog"
    :visible.sync="memDialog">
</npm-com-bg-dialog>

```

> title
```
弹框的标题
```

> visible

```
是否显示
```

> closeOnClickModal

```
点击蒙层是否关闭(默认关闭)
```

> width

```
宽度
```
> fullscreen

```
是否全屏
```

> top

```
离顶部的高度
```
> beforeClose

```
关闭之前的回调
```

> center

```
是否居中
```

> customClass

```
额外类
```

> showClose

```
是否显示关闭按钮
```
> 事件(opend | closed)

```
opend: 打开之后的回调
closed: 打开之前的回调
```