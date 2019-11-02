## npm-com-bg-input-text
input输入框

## 如何引用

js中

```
import NpmComBginputText from 'npm-com-bg-input-test'
.....
components: {
  NpmComBginputText
}
.....
```

vue中


```
<npm-com-bg-input-text
    showPassword 
    formate="phone">
</npm-com-bg-input-text>
```

> value

```
文本框的（初始&最终）值
```

> disabled

```
是否禁用
```

> readonly

```
是否只读
```
> placeholder

```
placeholder
```

> showPassword

```
是否显示密码
```
> clearable

```
是否清空
```
> type

```
类型: text, textare
```

> autocomplete

```
是否自动完成
```
> formate(格式)

```
email: 邮箱
phone: 手机
number: 数字
```

> 事件(change: 输入改变时触发; )
