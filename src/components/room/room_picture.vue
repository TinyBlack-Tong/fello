<template xmlns="http://www.w3.org/1999/html">
<!--  用户点击主页的房间图片进行跳转 跳转到此页-->
  <div class="frame">
<!--    {{roomlist}}-->
<!--    该区域用于显示房间的照片-->
    <div class="room_picture_place">
        <div class="room_picture_left" >
        <img class="big_picture"  src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
        </div>
      <div class="room_picture_right">
        <img class="small_picture"  src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
        <img class="small_picture"  src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
        <img class="small_picture"  src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
        <img class="small_picture"  src='https://i.loli.net/2017/08/21/599a521472424.jpg'>
    </div>

  </div>
    <!--详情 评价等一栏按钮-->
    <Affix :offset-top="-20" @on-change="change">

    <div class="button_place">
      <Button>详情</Button>
      <Button>评价</Button>
      <Button>可定日期</Button>
      <Button>位置</Button>
      <Button>须知</Button>
      <Button>房东</Button>
    </div>
      <div class="split">

      </div>
    </Affix>


    <div class="information">
      <span style="float:left">{{this.room_list.room_kind}}</span><br>
      <span style="float:left;color: #1D976C;">{{this.room_list.headline}}</span> <br>
      <span style="float:left"><h1> {{this.room_list.description}}</h1></span>
      <div class="icon_place">
        <img style="width: 30px;height: 30px" src="../bedroom_icon.png">
        <span  style="font-size: 15px">{{this.room_list.bed_num}}间卧室</span>
        <img style="width: 30px;height: 30px" src="../bed_icon.png">
        <span  style="font-size: 15px">{{this.room_list.bed_num}}张床</span>
        <img style="width: 30px;height: 30px" src="../toilet_icon.png">
         <span  style="font-size: 15px">{{this.room_list.bed_num}}个卫生间</span>
        <img style="width: 30px;height: 30px" src="../people_icon.png">
        <span  style="font-size: 15px">{{this.room_list.bed_num}}最大入住人数</span>
      </div>
      <div class="split">
      </div>
<!--      房东区域-->
  <div class="house_owner">
    <div class="demo-avatar" >
      <Avatar icon="ios-person"  size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
    </div>
    <span style="margin-left: 20px;margin-top: 10px"><h3>房东:{{this.room_list.house_owner}}</h3></span>
    <span style="color:#42b983;margin-left:-87px;margin-top: 50px"><h5>已验证身份</h5></span>
<!--    房屋介绍-->
    <div class="house_introduction_place">
      <h4 class="house_introduction_word">
        这里是北信科公寓!!!真的┗|｀O′|┛ 嗷~~哒哒哒哒哒哒多多多多多多多多多多多多多多的点点滴滴</h4>
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

    <Affix :offset-top="45">
    <div class="window">
      <div class="price">
      <span style="color: #42b983;">
        <h2>￥{{this.room_list.price}}/晚</h2>
      </span>
      <span style="position:relative;left: 80px;top:-40px;text-decoration:line-through"><h3>200/晚</h3></span>
      </div>
<!--      星星-->
      <div class="rate">
      <el-rate v-model="this.star_number" :colors="colors" disabled></el-rate>
        200条评价

      </div>

      <!--      日期选择器-->
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <div class="people_number">
        <h3 style="margin-bottom: 10px;">人数</h3>
        <el-select style="width: 353px" v-model="people_number" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <Button style="font-size:20px;text-align:center;position: relative;width: 353px;height:40px;top: 30px;left:-10px">查看房屋可订状态</Button>

      </div>
    </div>
    </Affix>
  </div>

</template>
<script>
    export default {

      name: "",
      data(){
          return{
            room_list:{},
            star_number:5,
            value1: '',
            colors: ['#42b983', '#42b983', '#42b983'],
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
            people_number:'',
          }
      },
      created() {
        this.room_list=this.$route.query.room_list
          console.log(this.room_list)
      },
      methods:{

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
    top: 13px;
    display: flex;
    height: 50px;
    background: white;
  }
  .split{
    position: relative;
    width: 50%;
    top:10px;
    height: 1px;
    background-color: 	#808080;
  }
  .information{
    position: absolute;
    top: 450px;
    left: 30px;
  }
  .icon_place  {
    position: relative;
    margin-right: 10px;
    top: 10px;
    left: 0px;
    width: 400px;
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
    top: 20px;
    border-style: none;
    display: flex;

  }
  .ensure{
    position: relative;
    top: 350px;
    left: 30px;
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
    height: 320px;
    border:1px solid #D3D3D3;
    right: 100px;
  }
  .rate{
    margin-left: 20px;
    position: relative;
    display: flex;
    top: -30px;
    float: left;

  }
  .price{
    margin-left: 20px;
  }
  .people_number{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
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
</style>
