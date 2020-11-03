<template>

  <div class="room_publish_room_phone">
    <h2 style="margin-top: 50px">填写您的个人信息</h2>
    <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">
      您的手机
    </h3>
    <el-input style="margin-top: 20px;width: 470px" v-model="phone" placeholder=""></el-input>
    <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">
      您的姓名
    </h3>
    <el-input style="margin-top: 20px;width: 470px" v-model="name" placeholder=""></el-input>
    <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">
      您的身份证id
    </h3>
    <el-input style="margin-top: 20px;width: 470px" v-model="id" placeholder=""></el-input>


    <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">发布</el-button>
    <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>

  </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            phone:"",
            name:"",
            id:""
          }
      },
      methods:{
        goto_prier(){
          this.$router.push({
            path:'/room_publish_room_price'
          })
        },
        goto_next(){
          const data = this.$route.query
          const result = {  // 最终提交的数据
            city: data.city,
            type: data.type,
            pplMax: data.pplMax,
            bedroomNum: data.bedroomNum,
            bedNum: data.bedNum,
            bathroomNum: data.bathroomNum,
            location: data.location,
            title: data.title,
            checkinTimeFrom: data.checkinTimeFrom,
            checkinTimeTo: data.checkinTimeTo,
            checkoutTime: data.checkoutTime,
            tags: data.tags,
            description: data.description,
            price:data.price,
            phone:this.phone,
            ownerId: localStorage.getItem("id")
          }
          console.log(result)
          this.$axios.post('http://localhost:8081/api/houses', result).then(res => {
            console.log(res)
          })
          this.$message({
            message: '发布成功,待审核',
            type: 'success'
          });
        },
      }
    }
</script>

<style scoped>
  .room_publish_room_phone {
    position: absolute;
    top: 0px;
    left: 120px;
    text-align: left;
  }
  .goto_next{
    position: absolute;
    bottom: -100px;
    left:400px ;
  }
  .goto_prier{
    position: absolute;
    bottom: -100px;
    left:-10px ;
  }

</style>
