## npm-com-bg-breadcrumb
面包屑

## 如何引用

js中

```
import Breadcrumb from 'npm-com-bg-breadcrumb'
.....
components: {
  Breadcrumb
}
.....
```

vue中


```
<npm-com-bg-breadcrumb 
    isShowClass 
    class = "bread-title" 
    :navList = "navData">
</npm-com-bg-breadcrumb>

```

> isShowClass
```
是否需要显示类(用图片代替字符分隔符)
```

> separator

```
图标分隔符
```

> separatorClass

```
图标分隔符类(默认separatorClass)
```

> navList

```
数据(list)

{
  name: '首页',// 名称
  to: '/',// 跳转地址
  replace:true, // 是否添加记录,
  index: 0, // 索引
},
{
  name: '用户管理',
},
```