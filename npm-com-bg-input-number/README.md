## npm-com-bg-input-number
数字输入框

## 如何引用

js中

```
import NpmComBginputNumber from 'npm-com-bg-input-number'
.....
components: {
  NpmComBginputNumber
}
.....
```

vue中


```
<npm-com-bg-input-number 
    value="1.2" 
    step="1" 
    digit="2"
    min-value="-3" max-value="5">
</npm-com-bg-input-number>
```

> value

```
文本框的（初始&最终）值
```

> step

```
自（增/减）的量，每次点击按钮时按照此值（自增/自减）
```

> digit

```
小数点位数（默认不处理）
```
> minValue

```
最小值
```

> maxValue

```
最大值
```


> 事件(change: 输入改变时触发; )
