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
      <div class="card_item"   v-for="item in room_list" @click="toRoom(item.id)">
        <img id="card_item_picture" :src="item.url" width="100%" height="220px"><br/>
        <span style="color:	#006400;">
          <h4>
          {{item.city}}·
          {{item.location}}
          {{item.bedNum}}张床</h4></span>
          <div class="title_place " style="height: 80px">
            <h3>
          <span >
          {{item.title}}
        </span>
<!--          {{item.description}}-->
        </h3>
      </div>
      <div class="price_star">
        <h2><span >￥{{item.price}}/晚</span></h2>
<!--        <h3><span>200/晚</span></h3>-->
        <!--          评价星星 不可改 disabled-->
          <Rate allow-half disabled v-model="item.rate" />
        </div>
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
        //src 测试
        src:'https://i.loli.net/2017/08/21/599a521472424.jpg',
        //图片地址
        url:'',
        type:1,
        //床数
        bedNum:"2",
        //民宿名称
        title:"北信科·学生宿舍",
        //描述
        description:"北信科527",
        //城市
        city:"北京",
        //价钱
        price:1,
        //房间的等级评星
        rate: 5,
        //  房东的id
        house_owner:"韩梅梅"
      },],
    };

  },

  mounted() {
    const _this=this
      this.$axios.get('http://localhost:8081/api/hot-houses?page=0&city=%E5%8C%97%E4%BA%AC').then(function (res) {
      // console.log("row的值为"+this.res.code)
      console.log(res.data.data)
        _this.room_list=res.data.data;
    })
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
          // console.log("room id ="+id)
          this.$router.push({
            path:"/room",
            query:{
              room_id:id,
              // room_list:_this.room_list,
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
    /*position: relative;*/
    top: 0px;
    height: auto;
    display: flex;
    flex-direction: column;

  }

  .card{
    /*border-style: solid;*/
    position: relative;
    top: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;
  }
  .card_item{
      display: inline-block;
    width: 340px;
    height: 370px;
    margin: 30px;
    text-align: left;
    /*border-style: solid;*/
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

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
    left: 70px;
    display: flex;
    top: 50px;
    width: 1200px;
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
  .price_star{
    /*border-style: solid;*/
    position: relative;
    bottom: 20px;
    display: flex;
    flex-direction: column;
  }
</style>
