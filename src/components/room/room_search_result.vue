<template>
    <div>
<!--      搜索结果显示在此页-->
<!--      11-->
      {{this.$route.query.content}}
      <Affix :offset-top="15">
      <div id="container">
      </div>
      </Affix>
      <div class="card">
        <div class="card_item"  v-for="item in room_list" :key="item" @click="toRoom(item.id)">
          <img id="card_item_picture" :src="item.url" width="290px" height="220px"><br/>
          <div class="stuff">
<!--            民宿类型 床的数量-->
            <span style="color:#2F4F4F" v-if="item.type===0">
              <h4 style="margin: 10px">整个房源·{{item.bedNum}}张床</h4>
               <h3 style="margin: 10px">
              <span style="color:		#006400;overflow:hidden">{{item.title}}</span>
            </h3>
            </span>
            <span style="color:#2F4F4F" v-else-if="item.type===1">
              <h4 style="margin: 10px">独立房源·{{item.bedNum}}张床</h4>
               <h3 style="margin: 10px">
              <span style="color:		#006400;overflow:hidden">{{item.title}}</span>
            </h3>
            </span>
            <span style="color:#2F4F4F" v-else-if="item.type===2">
              <h4 style="margin: 10px">合住房间·{{item.bedNum}}张床</h4>
               <h3 style="margin: 10px">
              <span style="color:		#006400;overflow:hidden">{{item.title}}</span>
            </h3>
            </span>
<!--             大标题-->
<!--            <div class="title_description" v-if="item.type===0">-->
<!--           -->
<!--            </div>-->
<!--              标签区域-->
<!--              <div class="tag" v-for="item1 in item.tags">-->
<!--                <el-tag size="small" style="border-radius: 20px" type="success">{{item1}}</el-tag>-->
<!--              </div>-->
            <!--          评价星星 不可改 disabled-->
              <Rate  allow-half disabled v-model="item.rate" />
              </div>
              <div class="split">
              </div>
            <!--            价格-->
            <div class="price">
              <h3><span style="color:		#006400;overflow:hidden">￥{{item.discountedPrice}}/晚</span></h3>
              <h3><span style="text-decoration: line-through;position: relative;top: -45px;right: -100px">{{item.price}}</span></h3>
            </div>
          </div>
        </div>
<!--        <div class="bottom" style="margin-top: 100px">-->
<!--          <el-button @click="getNextPage()" type="primary">下一页</el-button>-->
<!--        </div>-->
    </div>

</template>

<script>
    export default {
      name: "",

      data() {
        return {
          dialogVisible: false,
          //轮播图的图片数组
          imageList: [{
            src: require('../../assets/banner2.jpg')
          }, {
            src: require('../../assets/banner3.jpg')
          },],
          room_list: [{
            id: 1,
            //图片
            url: '',
            //小标题
            title: "2套公寓",
            //床数
            bedNum: "2",
            //描述
            description: "北信科529",
            //房间的等级评星
            rate: 3,
            //房间类型
            type: 1,

            discountedPrice: 1,
          },],
          tags: [{}],
          page:0
        };
      },
      mounted() {
        var content = this.$route.query.content;
        const _this = this;
        this.$axios.get('http://localhost:8081/api/hot-houses?page=' + this.page + '&city=' + content).then(function (res) {
          console.log(res.data.data)
          _this.room_list = res.data.data
        });
        window.onLoad = function () {
          var map = new AMap.Map('container', {
            zoom: 11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode: '3D'//使用3D视图
          });
          AMap.service(["AMap.Walking"], function () {
            var MWalk = new AMap.Walking({
              map: map,

              panel: "panel"

            }); //构造路线导航类

            MWalk.search([

              {keyword: '北京市地震局(公交站)'},

              {keyword: '亦庄文化园(地铁站)'}

            ], function (status, result) {

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
      methods:{
        toRoom(id){
          const _this=this;
          this.$router.push({
            path:"/room",
            query:{
              room_id:id,
            }
          })
        },

        getNextPage() {
          const content = this.$route.query.content
          this.page += 1
          this.$axios.get('http://localhost:8081/api/houses-search?page=' + this.page + 'key='+ content).then(res => {
            console.log(res)
          }).catch(e => {
            console.log(e)
          })
        }

      }
    };



</script>

<style scoped>
  .card{
    position: relative;
    top: 40px;
    left: 15px;
    display: flex;
    /*justify-content: start;*/
    flex-wrap: wrap;
    width: 800px;
    /*border-style: solid;*/
  }
  .card_item{
    display: flex;
    width: 100%;
    height:240px;
    margin: 10px;
    /*border-style: solid;*/
    text-align: left;
    flex-direction: row;
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
    height: 200px;
  }
  .price{
    position: relative;
    top: 30px;
    right:-30px;
    width: 120px;
    height: 30px;
    /*border-style: solid;*/
  }
  .split{
    position: relative;
    right: -20px;
    width: 1px;
    height: 200px;
    background:#B0C4DE;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /*.tag {*/
  /*  margin-top: 15px;*/
  /*  margin-bottom: 15px;*/
  /*}*/
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
  /*margin-top: 50px;*/
  overflow: hidden;
  width:400px;
  height:170px;
  text-overflow: ellipsis;
}
</style>
