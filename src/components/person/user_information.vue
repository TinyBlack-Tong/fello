<template>
  <div>
    <Affix :offset-top="0" @on-change="change">
      <div class="header">
        <div id="logo_image" @click="goto_index()">
          <img :src="logo_url"  width="50px" height="50px" >
        </div>
      </div>
    </Affix>
    <img style="position: absolute;width:500px;height:750px;top: 10px;z-index: -1;"
         src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png">
    <div class="information">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="您的姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="价钱">
          {{this.$route.query.price}}
        </el-form-item>
<!--        <el-form-item label="入住人数">-->
<!--          {{this.$route.query.pplImax}}-->
<!--        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">立即付款</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="pay" v-if="success">
      <img :src="pay_url"  width="500px" height="500px" >

      <img >
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data(){
      return{
        //logo同路人的图片地址
        pay_url:require('../../assets/pay.jpg'),
        logo_url:require('../../assets/sakula.png'),
        success:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    mounted() {
      console.log(this.$route.query.checkinDate)

    },
    methods:{
      goto_index(){
        this.$router.push({
          path: "/",
        })

      },
      onSubmit(){
        const idInfos = [{
          "name":this.form.name,
          "idNumber":this.form.id,
          "tel":this.form.phone
        }]
        console.log(idInfos)
        this.$axios({
          method: "post",
          url: "http://localhost:8081/api/orders",
          data: {
            userId: this.$route.query.user_id,
            houseId: this.$route.query.room_id,
            checkinDate:this.$route.query.checkinDate,
            checkoutDate:this.$route.query.checkoutDate,
            pplNum:this.$route.query.pplNum,
            idInfos:[{
              "name":this.form.name,
              "idNumber":this.form.id,
              "tel":this.form.phone
            }]
          }
        }).then((res) => {
          if (res.data.code==200){
            this.$message({
              showClose: true,
              message: '恭喜你,付款成功,5秒后返回主页',
              type: 'success'
            });
            this.success=true;
            console.log("成功")
            const TIME_COUNT = 5;
            if(!this.timer){
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(()=>{
                if(this.count > 0 && this.count <= TIME_COUNT){
                  this.count--;
                }else{
                  this.show = true;
                  clearInterval(this.timer);
                  this.timer = null;
                  //跳转的页面写在此处
                  this.$router.push({
                    path: '/'
                  });
                }
              },1000)
            }


          }


        })
        }
    },
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  #logo_image{
    position: absolute;
    top: 0px;
    left: 20px;
    width:10px;
    height: 10px;
  }
  .information {
    position: absolute;
    top: 100px;
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
