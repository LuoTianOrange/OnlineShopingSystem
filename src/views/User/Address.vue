<template>
  <div>
    <div class="mt-[20px] mx-[30px]">
      <span class="plainText font-[1.6rem!important]">收货地址</span>
    </div>
    <div class="w-[400px] flex flex-col items-end my-[20px]">
      <!-- <div class="inputbox">
        <span class="inputext">所在地区：</span>
        <input type="text" class="select-box w-[300px]">
      </div> -->
      <div class="inputbox">
        <span class="inputext">详细地址：</span>
        <input type="text" class="select-box w-[300px]" maxlength="120">
      </div>
      <div class="inputbox">
        <span class="inputext">收货人名字：</span>
        <input type="text" class="select-box w-[300px]">
      </div>
      <div class="inputbox">
        <span class="inputext">手机号码：</span>
        <input type="text" class="select-box w-[300px]">
      </div>
    </div>
    <div class="inputbox ml-[100px!important]">
      <button class="blackbutton w-[120px]">保存</button>
    </div>
    <div class="mt-[30px]">
      <el-table :data="tableData" border height="350" style="width: 100%">
        <el-table-column prop="name" label="收货人" width="200" />
        <!-- <el-table-column prop="region" label="所在地区" width="130" /> -->
        <el-table-column prop="address" label="详细地址" width="370" />
        <el-table-column prop="postalcode" label="邮编" width="100" />
        <el-table-column prop="phone" label="电话/手机" width="140" />
        <el-table-column prop="operation" label="操作">
          <template #default>
            <el-button link type="primary" size="middle">修改</el-button>
            <el-button link type="primary" size="middle">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Address',
  data() {
    return {
      tableData: [],
    }
  },
  mounted(){
    axios.get(`/ship/selectAllShip`)
    .then((response)=>{
      console.log(response.data)
      this.tableData.push(response.data)
      console.log(this.tableData);
    })
  }
}
</script>

<style scoped>
.inputbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
}

.inputext {
  text-align: right;
}
</style>