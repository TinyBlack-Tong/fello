<template>
    <div>
      搜索结果显示在此页
      11
      {{this.$route.query.content}}
      <Affix :offset-top="15">
      <div id="container">
      </div>
      </Affix>
      <div class="card">
        <div class="card_item"   v-for="item in room_list" :key="item" @click="toRoom(item.id)">
          <img id="card_item_picture" :src="item.url" width="290px" height="220px"><br/>

          <div class="stuff">
<!--            民宿类型 床的数量-->
            <span style="color:#2F4F4F">
              <h4 style="margin: 10px">{{item.type}}·{{item.bedNum}}张床</h4>
            </span>
<!--             大标题-->
            <div class="title_description">
            <h3 style="margin: 10px">
              [<span style="color:		#006400;">{{item.title}}</span>]
              {{item.description}}
            </h3>
            </div>
<!--              标签区域-->
<!--              <div class="tag" v-for="item1 in item.tags">-->
<!--                <el-tag size="small" style="border-radius: 20px" type="success">{{item1}}</el-tag>-->
<!--              </div>-->
<!--              &lt;!&ndash;          评价星星 不可改 disabled&ndash;&gt;-->
<!--              <Rate  allow-half disabled v-model="item.rate" />-->
<!--              <div class="split">-->
<!--              </div>-->
<!--            价格-->
            <div class="price">
              <h3><span>￥{{item.price}}/晚</span></h3>
              <h3><span style="text-decoration: line-through;position: relative;top: -25px;right: -90px">{{item.discountedPrice}}</span></h3>
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
            //图片
            url:'https://i.loli.net/2017/08/21/599a521472424.jpg',
            //小标题
            title:"2套公寓",
            //床数
            bedNum:"2",
            //描述
            description:"北信科529",
            //房间的等级评星
            rate: 3,
            type:1,
            discountedPrice:1,
          },],
          tags:[{

          }]
        };

      },
      mounted() {
          var content=this.$route.query.content
          const _this=this
          this.$axios.get(`http://localhost:8081/api/houses-search/?key=${content}&page=0`).then(function (res) {
          // console.log("row的值为"+this.res.code)
          console.log(res.data.data)
            _this.room_list=res.data.data
            _this.tags=res.data.data.tags
            console.log(res.data.data.tags)

          });
        window.onLoad  = function() {
          var map = new AMap.Map('container', {
            zoom: 11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode: '3D'//使用3D视图
          });
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
    border-style: solid;
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
.title_description{
  border-style: solid;

}
</style>
