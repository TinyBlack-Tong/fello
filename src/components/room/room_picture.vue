<template xmlns="http://www.w3.org/1999/html">
<!--  用户点击主页的房间图片进行跳转 跳转到此页-->
  <div class="frame">

<!--    {{localStorage.getItem(id)}}-->
<!--    {{roomlist}}-->
<!--    该区域用于显示房间的照片-->
    <div class="room_picture_place">
        <div class="room_picture_left" >
        <img class="big_picture"  :src="this.room_list.url[0]">
        </div>
      <div class="room_picture_right">
        <img class="small_picture"  :src='this.room_list.url[1]'>
        <img class="small_picture"  :src='this.room_list.url[2]'>
        <img class="small_picture"  :src='this.room_list.url[3]'>
        <img class="small_picture"  :src='this.room_list.url[4]'>
    </div>

  </div>
    <!--详情 评价等一栏按钮-->
    <Affix :offset-top="0" @on-change="change">
<!--      {{this.userID}}-->
    <div class="button_place">
      <div class="button_place_in">
      <Button>详情</Button>
      <Button>评价</Button>
      <Button>可定日期</Button>
      <Button>位置</Button>
      <Button>须知</Button>
      <Button>房东</Button>
      </div>
    </div>
    </Affix>
    <div class="information">
      <span style="float:left;color: #006400;"><h3>{{this.room_list.title}}</h3></span><br>
<!--      <span style="float:left;"><h4> {{this.room_list.description}}</h4></span>-->
      <div class="icon_place">
        <img style="width: 30px;height: 30px" src="../bedroom_icon.png">
        <span  style="font-size: 15px;margin-left: 10px;width: 140px"><h4>{{this.room_list.bedroomNum}}间卧室</h4></span>
        <img style="width: 30px;height: 30px;" src="../bed_icon.png">
        <span  style="font-size: 15px;margin-left: 10px;width: 90px"><h4>{{this.room_list.bedNum}}张床</h4></span>
        <img style="width: 30px;height: 30px" src="../toilet_icon.png">
        <span  style="font-size: 15px;margin-left: 10px;width: 150px"><h4>{{this.room_list.bathroomNum}}个卫生间</h4></span>
        <img style="width: 30px;height: 30px" src="../people_icon.png">
        <span  style="font-size: 15px;margin-left: 10px;width: 220px"><h4>{{this.room_list.pplMax}}最大入住人数</h4></span>
        <div class="comment_tag">
          <span  style="font-size: 15px;margin-left: 10px;color: #006400;">
           {{this.room_list.commentNum}}
          </span>
          ·条评论
        </div>
      </div>
      <div class="split_2">
      </div>
<!--      房东区域-->
  <div class="house_owner">
    <div class="demo-avatar" >
      <Avatar icon="ios-person"  size="large" :src="this.room_list.url[0]"/>
    </div>
<!--   描述 -->
    <div class="description">
    <span style="float:left;"><h4> {{this.room_list.description}}</h4></span>
    </div>
<!--    <span style="color:#42b983;margin-left:-87px;margin-top: 50px"><h5>已验证身份</h5></span>-->
<!--    房屋介绍-->
    <div class="house_introduction_place">
      <h4 class="house_introduction_word">
      </h4>
    </div>
    </div>
    </div>

    <!--    房东区域至此完结  --------------------------------------------->
    <div class="ensure">
      <div class="left">
        <h2>独立房间</h2>
        <h2>超赞房东</h2>
        <h2>入住/退房</h2>
        <h2>自助入住</h2>
      </div>
      <div class="right">
        <h3>有自己的单独卧室，与他人共享其它空间</h3>
        <h3>超赞房东经验丰富、评分很高，致力于为房客提供优质的住宿体验。</h3>
        <h3>入住时间 下午2:00后、退房时间 下午12:00</h3>
        <h3>通过密码钥匙盒自助入住</h3>
      </div>
    </div>

    <div class="window">
      <div class="price">
      <span style="font-size:22px;color: rgb(0, 132, 137) !important;;">
        ￥{{this.room_list.discountedPrice}}/晚
      </span>
      <span style="color: rgb(118, 118, 118) !important;
      position:relative;
      left: 10px;
      top:-3px;text-decoration:line-through">
        {{this.room_list.price}}/晚</span>
      </div>
<!--      星星-->
      <div class="rate">
      <el-rate v-model="this.room_list.rate" :colors="colors" disabled></el-rate>
        <span style="color:#006400;font-size: 15px">{{this.room_list.commentNum}}条</span>
      </div>
      <div class="date_choose">
      <!--      日期选择器-->
        <el-date-picker
          v-model="value1"
          value-format="yyyy-MM-dd"
          type="daterange"
          @change="print()"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </div>

      <div class="people_number">
        <h3 style="margin-bottom: 10px;">人数</h3>
        <el-select style="width: 353px" v-model="pplMax" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="price_total">
        ${{this.room_list.discountedPrice}}×{{this.date_result}}晚
        <span style="position: relative;right: -260px">{{this.room_list.discountedPrice*this.date_result}}</span>
      </div>
      <Button  clas="no_houses" v-if="this.room_list.status==0"
        style="
        background:#FF5A5F ;
        font-size:20px;
        text-align:center;
        position: relative;
        width: 353px;
        height:40px;top: 30px;left:-10px">
        房屋不可预订</Button>
      <Button v-if="this.room_list.status==1" @click="full_information()" style="
        font-size:20px;
        text-align:center;
        position: relative;
        width: 353px;
        height:40px;top: 30px;left:-10px">
        预订房屋</Button>


    </div>
  </div>

</template>
<script>
    export default {

      name: "",
      data(){
          return{
            userID:localStorage.getItem('id'),
            room_list:{},
            star_number:5,
            value1: '',
            date_result:1,
            colors: ['00897B', '00897B', '#00897B'],
            options: [{
              value: '选项1',
              label: '1人'
            }, {
              value: '选项2',
              label: '2人'
            }, {
              value: '选项3',
              label: '3人'
            }, {
              value: '选项4',
              label: '4人'
            }, {
              value: '选项5',
              label: '5人'
            }],
            pplMax:'',
          }
      },
      mounted() {
        const _this=this
        this.$axios.get(`http://localhost:8081/api//houses/${this.$route.query.room_id}`).then(function (res) {
          _this.room_list=res.data.data;
        })
        // var testdata=JSON.parse(localStorage.getItem(id))
      },
      created() {
        this.room_list=this.$route.query.room_list;
          console.log(this.room_list)
      },
      computed:{

      },
      methods:{
        print(){
          var start_day=this.value1[0].toString().substring(8,10);
          var finish_day=this.value1[1].toString().substring(8,10);
          var result=parseInt(finish_day)-parseInt(start_day);
          console.log(result.toString())
          this.date_result=result
        },
        full_information(){
          this.$router.push(
            {
              path:'/user_information',
              query:{
                id:this.room_list.id,
                price:this.room_list.discountedPrice*this.date_result,
                user_id:this.userID,
                checkinDate:this.value1[0],
                checkoutDate:this.value1[1],
                pplMax:this.pplMax,
                room_id:this.$route.query.room_id,

        }
            }
          )

        },

      }
    }
</script>

<style scoped>
  .room_picture_place{
    position: relative;
    top: -10px;
    width: 100%;
    height: 300px;
    /*border-style: solid;*/
    display: flex;
    overflow: hidden;
  }
  .room_picture_left{
    width: 500px;
    display: flex;
    /*border-style: solid;*/
    overflow: hidden;
    flex: 1;
  }
  .big_picture{
    width: 100%;
    height: 100%;
    transition: all 1s;
    flex:1;
  }
  .big_picture:hover{
     transform: scale(1.4);
     overflow: hidden;
     /*background: red;*/
   }
  /*.room_picture_place:hover .room_picture_right{*/
  /*  filter: brightness(0.5);*/

  /*}*/
  .room_picture_right{
    display: flex;
    flex-wrap: wrap;
    flex:1;
  }
  .small_picture{
    width: 300px;
    height: 150px;
    flex: 1;
  }
  .button_place{
    position: relative;
    top:0px;
    /*left: 30px;*/
    display: flex;
    height: 50px;
    width: 100%;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    z-index: 100;
  }
  .button_place_in{
    margin-left: 20px;
  }
  .split{
    position: relative;
    width: 600px;
    left: 40px;
    top:30px;
    height: 1px;
    background-color: 	#808080;
  }
  .split_2{
    position: relative;
    width: 600px;
    left: 10px;
    top:50px;
    height: 1px;
    background-color: 	#808080;
  }
  .information{
    position: absolute;
    top: 450px;
    left: 30px;
    /*border-style: solid;*/
    width: 620px;
    text-align: left;
  }
  .icon_place  {
    position: relative;
    margin-right: 10px;
    top: 10px;
    left: 5px;
    width: 600px;
    display: flex;
    /*border-style: solid;*/

  }
  .button_place Button{
    margin-top: 10px;
  }

  .house_introduction_word{
    width: 300px;
    background: gainsboro;
    margin-top: 70px;
    margin-left: -60px;
    margin-bottom: 10px;
    text-align: left;
  }
  Button{
    border-style: none;
    text-align: left;
    margin-bottom: 20px;
    text-decoration: line-through;
    margin-left: 10px;
    background: #42b983;
    color: white;

  }
  .house_owner{
    position: relative;
    top: 100px;
    /*border-style: none;*/
    /*display: flex;*/
    flex-direction: row;
    height: 200px;
    width: 700px;
    /*border-style: solid;*/

  }
  .ensure{
    position: relative;
    top: 500px;
    left: 90px;
    height: auto;
    /*top: 350px;*/
    /*left: -560px;*/
    display: flex;
  }
  .right{
    display: flex;
    flex-direction: column;
    float: left;
    margin-left: 100px;
    margin-top: 3px;
    justify-content: start;
  }
  .window{
    position: absolute;
    width: 400px;
    height: 360px;
    border:1px solid #D3D3D3;
    right: 100px;
  }
  .rate{
    margin-left: 20px;
    position: relative;
    display: flex;
    top: -30px;
    float: left;
    margin-top: 40px;
    /*border-style: solid;*/
  }
  .price{
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    /*border-style: solid;*/
    text-align: left;
    margin-top: 20px;

    /*margin-left: 20px;*/
  }
  .people_number{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    /*border-style: solid;*/
    float: left;
  }

  Button:hover{
    background: #42b983;
    color: white;
  }
  h2{
    text-align: left;
    margin-top: 10px;
  }
  h3{
    text-align:left;
    margin-top: 15px;
  }
  .frame{
    height: 1000px;
  }
  h4{
    color: grey;
  }
  .comment_tag{
    position: relative;
    top: 40px;
    left: -460px;
    /*border-style: solid;*/
    text-align: left;
    width: 300px;
    display: flex;
  }
  .description{
    position: relative;
    /*border-style: solid;*/
    width: 500px;
    height: auto;
    top: -20px;
    left: 70px;
    background: rgb(248, 248, 248) !important;
  }
  .date_choose{
    position: relative;
    left: -9px;
    top: 5px;
    /*border-style: solid;*/
    height: auto;
  }
  .price_total{
    position: relative;
    top: 10px;
    text-align: left;
    margin-left: 13px;
    width: 300px;
    /*border-bottom:1px solid rgb(118, 118, 118) ;*/
  }
</style>
