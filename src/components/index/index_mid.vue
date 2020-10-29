<template>
  <div>
  <div class="swap">
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="item in imageList" :key="item">
        <div class="demo-carousel">
          <img class="carousel" :src='item.src'>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
  <!--中部实现：具体包括：房源的大小标题以及他们的图片-->
  <!-- —————————————————————————————————————————————————— -->
  <div id="mid">
    <h1 class="slogan">推荐房源 您值得拥有</h1>
    <!--      热门城市按钮-->
    <!--      <div class="city_button_bar" v-for="item in city_name_button" :key="item">-->
    <!--        <Button class="city_button">{{item.city_name}}</Button>-->
    <div class="city_button_bar">
      <Button class="city_button">北京</Button>
      <Button class="city_button">上海</Button>
      <Button class="city_button">福建</Button>
      <Button class="city_button">广东</Button>
      <Button class="city_button">西安</Button>
      <Button class="city_button">天津</Button>
      <Button class="city_button">西安</Button>
      <Button class="city_button">成都</Button>
      <Button id="more_button">更多</Button>


    </div>
    <div class="card" >
      <div class="card_item"   v-for="item in room_list" :key="item" @click="toRoom(item.id)">
        <img id="card_item_picture" :src="item.src" width="290px" height="220px"><br/>
        <span style="color:#2F4F4F"><h4>{{item.room_kind}}·{{item.bed_num}}张床</h4></span>
        <h3>[<span style="color:	#006400;">{{item.headline}}</span>]
          {{item.description}}
        </h3>

        <h2><span >￥{{item.price}}/晚</span></h2>
        <h3><span style="text-decoration: line-through;color: #42b983;position: relative;top: -25px;right: -90px">200/晚</span></h3>
        <!--          评价星星 不可改 disabled-->
        <template>
          <Rate style="position: relative;top:-20px;" allow-half disabled v-model="item.valueHalf" />
        </template>
      </div>
    </div>
  </div>

    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialogVisible: false,
      //轮播图的图片数组
      imageList:[{
        src:require('../../assets/banner2.jpg')
      },{
        src:require('../../assets/wanshengjie.jpg')
      },],
      room_list:[{

        id:1,

        src:'https://i.loli.net/2017/08/21/599a521472424.jpg',
        //小标题
        room_kind:"2套公寓",
        bed_num:"2",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科527",
        price:1,
        //房间的等级评星
        valueHalf: 5,
        //  房东的id
        house_owner:"韩梅梅"
      },{
        id:2,
        src:"https://i.loli.net/2017/08/21/599a521472424.jpg",
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/真棒",
        price:1,
        //房间的等级评星
        valueHalf: 5,
        house_owner:"张彤"
      },{
        src:"https://i.loli.net/2017/08/21/599a521472424.jpg",
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北京/鸟巢",
        price:1,
        //房间的等级评星
        valueHalf: 5,
        house_owner:"岳雷"
      },{
        src:'https://seopic.699pic.com/photo/50116/7534.jpg_wh1200.jpg',
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/强啊/",
        price:200,
        //房间的等级评星
        valueHalf: 5,
      },{
        src:'https://seopic.699pic.com/photo/50115/5857.jpg_wh1200.jpg',
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/强啊/",
        price:200,
        //房间的等级评星
        valueHalf: 5,

      },{
        src:'https://seopic.699pic.com/photo/50140/8553.jpg_wh1200.jpg',
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/强啊/",
        price:200,
        //房间的等级评星
        valueHalf: 5,
      },{
        src:'https://i.loli.net/2017/08/21/599a521472424.jpg',
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/强啊/",
        price:200,
        //房间的等级评星
        valueHalf: 5,
      },{
        src:'https://seopic.699pic.com/photo/50088/2797.jpg_wh1200.jpg',
        //小标题
        room_kind:"整套公寓",
        bed_num:"1",
        //大标题
        //民宿名称
        headline:"北信科·学生宿舍",
        //描述
        description:"北信科/强啊/",
        price:200,
        //房间的等级评星
        valueHalf: 5,
      }],
    };

  },
      methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        toRoom(id){
          const _this=this;
          this.$router.push({
            path:"/room",
            query:{
              room_list:_this.room_list[id-1]
            }
          })
        },

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swap{
    position: relative;
    top: -13px;
    left: 0px;
    width: 100%;
    height: 500px;
    align-self: center;
    z-index:-1;
  }
  /*轮播图的css*/
  .carousel{
    width: 100%;
    height: 500px;
    background-size: cover;
  }
  #mid{
    position: relative;
    top: 0px;
  }

  .card{
    position: relative;
    top: 40px;
    left: 15px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 1200px;
  }
  .card_item{
    display: inline-block;
    width: 20%;
    height: 300px;
    margin: 30px;
    text-align: left;
  }
  #card_item_picture{
    border-radius: 3px;
  }
  .slogan{
    position: relative;
    top: 30px;
    width: 300px;
    left: 30px;

  }
  .city_button_bar{
    position: relative;
    top: 10px;
    left: 50px;
    display: flex;
    top: 50px;
  }
  .city_button{
    font-size: 20px;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-right: 30px;
    width: 100px;
    height: 40px;
    text-align: center;
    border-style: solid;
    border-color: #42b983;
    border-top: none;
    border-left: none;
    border-right: none;
    text-decoration: line-through;
  }
  .city_button:hover{
    background-color: #42b983;
    color: white;
    /*border-top: none;*/
    /*border-left: none;*/
    /*border-right: none;*/

  }
  /*城市按钮的more按钮*/
  #more_button{
    font-size: 20px;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-right: 30px;
    width: 100px;
    height: 40px;
    text-align: center;
    border-style: solid ;
    border-top: none;
    border-left: none;
    border-right: none;
    border-image: linear-gradient(to right,#fc4a1a,#f7b733) 5 10;
  }
  #more_button:hover{
    background-image: linear-gradient(to left,#1D976C,#93F9B9);
    color: white;
  }

  Button{
    border-style: none;
    text-align: left;
    margin-bottom: 20px;
  }
</style>
