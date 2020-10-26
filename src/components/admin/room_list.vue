<template>
    <div>
      <div class="button_place">
          <el-button type="primary" class="button" @click="gotouser()">查看民宿</el-button>
          <el-button type="primary" class="button" @click="gotocheck()">审核民宿</el-button>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column
          id="table"
          prop="user_id"
          label="USER_ID"
          width="200">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

</template>

<script>
    export default {
        name: "",
      data() {
        return {
          tableData: [{
            user_id: '1',
          }, {
            user_id: '2',
          },]
        }
      },
        created() {
          const _this=this;
          this.$axios.get('http://localhost:8181/user/finall').then(function (res){
            console.log(res)
            _this.tableData=res.data;
            _this.tableData.user_id=res.data.user_id
          });
        },

    }
</script>

<style scoped>
  .button_place{
    display: flex;

  }

</style>
