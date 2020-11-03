<template>
    <div>
<!--套话区域-->
      <div class="dialog">
      <h1 style="margin-top: 80px">用户名字,您好,开启您的出租之旅吧</h1>
      <h5 style="margin-top: 50px">步骤1</h5>
      <h2>您打算发布什么样的房源？</h2>
      </div>
<!--      选择框区域 以及 表单区域-->
      <div class="form_place">
        <el-select v-model="type" placeholder="房源类型">
          <el-option style="height: 50px"
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left;color:#1D976C;">{{ item.label }}</span>
<!--              <span style="-->
<!--              word-break: break-all;-->
<!--              position:relative;-->
<!--              top:20px;-->
<!--              left:-55px;-->
<!--              width:100px;-->
<!--              height:auto;-->
<!--              text-align: left;-->
<!--              color: #8492a6;-->
<!--              font-size: 13px">-->
            <span v-show="flag_type">
              {{item.value }}
            </span>
<!--              </span>-->
          </el-option>
        </el-select>

        <el-select style="margin-left: 20px" v-model="value1" placeholder="房客人数">
          <el-option
            v-for="item1 in options"
            :key="item1.value"
            :label="item1.label1"
            :value="item1.value1">
          </el-option>
        </el-select>
        <el-input style="position: relative;top: 60px;left: -230px" v-model="city" placeholder="例如：北京"></el-input>
        <el-button @click="goto_room_publish_basic()" style="position: relative;top: 120px;left: -587px;background: #1D976C;color: white">继续</el-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
      data() {
        return {
          flag_type:false,
          city:"北京市",
          cities: [{
            value: 0,
            label: '整个房源'
          }, {
            value: 1,
            label: '独立卧室'
          }, {
            value: 2,
            label: '合用'
          }],
          //房源类型
          type: '',
          options: [{
            value1: 1,
            label1: '1位'
          }, {
            value1: 2,
            label1: '2位'
          }, {
            value1: 3,
            label1: '3位'
          }, {
            value1: 4,
            label1: '4位'
          }, {
            value1: 5,
            label1: '5位'
          }],
          value1: ''
        }


      },
      methods:{
        goto_room_publish_basic(){
          this.$router.push({
            name:'room_publish_basic',
            query: {
              city: this.city,
              type: this.type
            }
          })
        }

      }
    }
</script>




<style scoped>
  .dialog{
    position: absolute;
    top: 30px;
    left: 120px;
    text-align: left;
  }
  .form_place{
    /*border-style: solid;*/
    display: flex;
    position: absolute;
    top: 300px;
    left: 120px;
  }

</style>
