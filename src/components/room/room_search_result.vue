<template>
    <div>
      搜索结果显示在此页
      <Affix :offset-top="15">
      <div id="container">
      </div>
      </Affix>
      <div class="card">
        <div class="card_item"   v-for="item in room_list" :key="item" @click="toRoom(item.id)">
          <img id="card_item_picture" :src="item.src" width="290px" height="220px"><br/>

          <div class="stuff">
<!--            民宿类型 床的数量-->
            <span style="color:#2F4F4F">
              <h4 style="margin: 10px">{{item.room_kind}}·{{item.bed_num}}张床</h4>
            </span>
<!--             大标题-->
            <h3 style="margin: 10px">
              [<span style="color:		#006400;">{{item.headline}}</span>]
              {{item.description}}
<!--              标签区域-->
              <div class="tag">
                <el-tag size="small" style="border-radius: 20px" type="success">{{item.room_kind}}</el-tag>
                <el-tag size="small" style="border-radius: 20px" type="info">{{item.room_kind}}</el-tag>
                <el-tag size="small" style="border-radius: 20px" type="info">{{item.room_kind}}</el-tag>
              </div>
              <!--          评价星星 不可改 disabled-->
              <Rate  allow-half disabled v-model="item.valueHalf" />
              <div class="split">
              </div>
            </h3>
<!--            价格-->
            <div class="price">
              <h3><span>￥{{item.price}}/晚</span></h3>
              <h3><span style="text-decoration: line-through;position: relative;top: -25px;right: -90px">200/晚</span></h3>
            </div>
          </div>
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
            description:"北信科529",
            price:233,
            //房间的等级评星
            valueHalf: 3,
            //  房东的id
            house_owner:"韩梅梅"
          },{
            id:2,
            src:"https://i.loli.net/2017/08/21/599a521472424.jpg",
            //小标题
            room_kind:"整套公寓",
            bed_num:"10",
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
      mounted() {
        window.onLoad  = function() {
          var map = new AMap.Map('container', {
            zoom: 11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode: '3D'//使用3D视图
          });
          // var toolbar = new AMap.ToolBar();
          // map.addControl(toolbar);
          // var driving=new AMap.Driving();
          // driving.search([
          //   {keyword:'南五里店',city:'北京'},
          //   {keyword:'北信科',city:'北京'}
          //   ],function (status,data) {
          //     console.log(data)
          // })
          //步行导航

          AMap.service(["AMap.Walking"], function() {

            var MWalk = new AMap.Walking({

              map: map,

              panel: "panel"

            }); //构造路线导航类

            MWalk.search([

              {keyword: '北京市地震局(公交站)'},

              {keyword: '亦庄文化园(地铁站)'}

            ], function(status, result) {

            });

          });
        }
        var key = "9aba473b8f83bcf0f1acaceb7ae58a4a";
        var url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad&plugin=AMap.Driving`;
        var jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
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
    width: 800px;
    /*border-style: solid;*/
  }
  .card_item{
    display: flex;
    width: 100%;
    height:240px;
    margin: 10px;
    text-align: left;
    flex-direction: row;
    /*border-style: solid;*/
    /*border-color: #f7b733;*/
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  #card_item_picture{
    margin: 10px;
    border-radius: 3px;
  }
  .stuff{
    display: flex;
    /*border-style: solid;*/
    width: 285px;
    flex-direction: column;
    margin-top: 20px;
  }
  .price{
    position: relative;
    top: -350px;
    right: -300px;
  }
  .split{
    position: relative;
    top: -160px;
    right: -270px;
    width: 1px;
    height: 200px;
    background: 	#B0C4DE;
  }
  .tag {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  #container{
    position: absolute;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    top: 130px;
    right: 40px;
    width: 400px;
    height: 400px;
  }

</style>
