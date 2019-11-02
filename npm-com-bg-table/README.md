## npm-com-bg-table
table

## 如何引用

js中

```
import NpmComBgTable from 'npm-com-bg-table'
.....
components: {
  NpmComBgTable
}
.....
```
vue中

```
<npm-com-bg-table 
  :columns="columns"
    :tableData="resList"
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
    showPagination
    isRowClick
    isRadio
    :paginationConfig="{
      total: searchCondition.totalCount,
      currentPage: searchCondition.pageNum,
      showTotal: true,
      showJump: true,
      showBackground: true,
    }">
  <!-- slot为coulumns中的插槽名  -->
  <template slot="deptSlot" slot-scope="scope">
    <span>{{ scope.data.dept_name ? scope.data.dept_name : '--' }}</span>
  </template>
</npm-com-bg-table>
```

> columns

```
列名
```

> tableData

```
table的数据(list)
```

> isChecked

```
是否多选
```
> isRadio

```
是否单选
```

> tableBody

```
body的类
```
> columnHeader

```
head的类
```
> isRowClick

```
点击表格的一行是否要选中
```

> isTreeData

```
是否是树形结构
```
> isChildren

```
子节点的key值,默认children
```
> showPagination

```
是否显示分页
```
> paginationConfig
```
参考分页
```

> 事件(row-click: 点击表格; selection-change: 单选多选发生变化;pre-click: 点击上一页; next-click: 点击下一页; current-change: 当前页)
