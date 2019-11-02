## npm-com-bg-pagination
分页

## 如何引用

js中

```
import NpmComBgPagination from 'npm-com-bg-pagination'
.....
components: {
  NpmComBgPagination
}
.....
```
vue中

```
<npm-com-bg-pagination 
  :showTotal="paginationConfig.showTotal"
  :total="paginationConfig.total"
  @pre-click="handlePreClick"
  @next-click="handleNextClick"
  :jump="paginationConfig.showJump"
  :pageSize="paginationConfig.pageSize"
  :background="paginationConfig.showBackground"
  @current-change="handleCurrentPage"
  :currentPage="paginationConfig.currentPage"
  :pageCount="paginationConfig.pageCount">
</npm-com-bg-pagination>
```

> total

```
总数
```

> showTotal

```
是否显示总数
```

> pageSize

```
每页显示总条目个数
```
> pageCount

```
总页数
```

> disabled

```
是否禁用
```
> currentPage

```
当前页数
```
> pagerCount

```
页码按钮的数量
```

> jump

```
是否显示跳转功能
```
> background

```
是否有背景
```

> 事件(pre-click: 点击上一页; next-click: 点击下一页; current-change: 当前页)
