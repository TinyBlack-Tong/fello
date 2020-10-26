<template>
    <div>
      搜索结果显示在此页
      <div class="card" >
        <div class="card_item"   v-for="item in room_list" :key="item" @click="toRoom(item.id)">
          <img id="card_item_picture" :src="item.src" width="290px" height="220px"><br/>
          <span style="color:#2F4F4F"><h4>{{item.room_kind}}·{{item.bed_num}}张床</h4></span>
          <h3>[<span style="color:	#FF69B4;">{{item.headline}}</span>]
            {{item.description}}
          </h3>

          <h2>￥{{item.price}}/晚  <span style="text-decoration: line-through">200/晚</span></h2>
          <!--          评价星星 不可改 disabled-->
            <Rate allow-half disabled v-model="item.valueHalf" />
      </div>
    </div>
    </div>

</template>

<script>
    export default {
        name: "",
      data () {
        return {
          dialogVisible: false,
          //轮播图的图片数组
          imageList:[{
            src:require('../../assets/banner2.jpg')
          },{
            src:require('../../assets/banner3.jpg')
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
    }
</script>

<style scoped>
  .card{
    position: relative;
    top: 40px;
    left: 15px;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    width: 1200px;
    height: 300px;
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
</style>
