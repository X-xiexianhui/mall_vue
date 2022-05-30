<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="productName" label="商品名称" width="180"></el-table-column>
    <el-table-column prop="productPrice" label="商品价格" width="180"></el-table-column>
    <el-table-column prop="productClass" label="商品类别" width="180"></el-table-column>
    <el-table-column label="商品图片" width="180">
      <template #default="scope">
        <div v-for="(index,item) in scope.row.images" style="display: flex; align-items: center" :key="index">
          <el-image style="width: 100px; height: 100px" :src="'data:image/png;base64,'+item" fit="fit" />
        </div>
      </template>v
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
        >修改</el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "productList",
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit(index,row) {
      console.log(index)
      console.log(row)
    },
    handleDelete(index,row) {
      console.log(index)
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
