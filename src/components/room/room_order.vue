<template>
    <div>
      <h1>房源订单中心</h1>
    <div class="button_place">
      <Button @click="finish_button">已完成</Button>
      <Button @click="unpay_button">未支付订单</Button>
      <Button @click="pay_noCheckin_button">已支付但没入住</Button>
      <Button @click="cancel_button">已取消订单</Button>
    </div>
    <div  v-for="(item) in order_list" :key=item.house_title>
      <div class="rect" v-if="item.order_type==marked">
        <div class="right">
          <div class="head"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
          <div class="name">{{item.house_title}} </div>
          <div class="mark">房屋类型：{{item.sort}}</div>
        </div>
        <img :src="item.pic" class="img_css"/>
        <div class="flex-container">
           <p class="flex-item">入住时间：{{item.in_time}}</p>
           <p class="price">价钱：{{item.price}}元</p>
        </div>
        <div class="flex-container">
           <p v-if="marked==1" class="outtime">退房时间：{{item.out_time}}</p>
           <p v-else class="outtime"></p>
           <div class="up">
             <div v-if="marked==1"><Button>再租一次</Button></div>
             <div v-if="marked==2"><Button>去支付</Button><Button>取消</Button></div>
             <div v-if="marked==3"><Button>入住指南</Button></div>
             <div v-if="marked==4"><Button>再逛逛</Button></div>
           </div>
        </div>
   
      </div>
    </div>
  </div>

</template>

<script>
import hmm from "../../assets/hanmeimei.jpg"
    export default {
        name: "",
     data(){
      return {
        //是否填写了相关的个人资料
       is_information:false,
       marked:1,
       order_list:[{//订单信息
        house_title:'527',//房屋标题
        price:'1',//价钱
        sort:'类型a',//房屋类型
        pic:hmm,//图片
        in_time:'2020-10-1',//入住时间
        out_time:'2020-10-5',//退房时间
        order_type:1//订单种类 1：已完成 2：未支付 3：已支付但未入住 4：取消订单
       },{
        house_title:'528',
        price:'1',
        sort:'类型b',
        pic:hmm,
        in_time:'2020-10-1',
        out_time:'2020-10-5',
        order_type:1
       },
       {house_title:'韩梅梅',
        price:'1',
        sort:'类型b',
        pic:hmm,
        in_time:'2020-10-1',
        out_time:'2020-10-5',
        order_type:3
       },
       {house_title:'猛男韩梅梅',
        price:'1',
        sort:'类型b',
        pic:hmm,
        in_time:'2020-10-1',
        out_time:'2020-10-5',
        order_type:4
       }]
       

        }
      },
      methods: {
          finish_button(){//点击完成按钮
              this.marked=1;
              this.$router.push({
              path:"/order",
              query:{
                marked:this.marked
              }
            })
          },
          unpay_button(){//点击未支付按钮
              this.marked=2;
              this.$router.push({
              path:"/order",
              query:{
                marked:this.marked
              }
            })
          },
          pay_noCheckin_button(){//点击支付但未入住按钮
            this.marked=3;
            this.$router.push({
              path:"/order",
              query:{
                marked:this.marked
              }
            })
          },
          cancel_button(){//取消订单
            this.marked=4;
            this.$router.push({
              path:"/order",
              query:{
                marked:this.marked
              }
            })
          }
      },
      created(){
        this.marked=this.query.marked
        
      }
    }
</script>

<style scoped>
   Button{
    border-style: none;
    text-align: left;
    margin-bottom: 20px;
    text-decoration: line-through;
    margin-left: 10px;
    background: #42b983;
    color: white;
}
.head{
  width:50px;
}
.name{
  width:80px;
  margin-right: 50px;
}
.img_css{
    left: 20px;
    position: relative;
    top: 13px;
    display: flex;
    height: 50px;
    background: white;
  }
  img {
 max-width: 100px;
 max-height: 100px;
}
.rect {
  margin-top:10px;
  margin-left:390px;
  height: 225px;
  width: 500px;
  border: 1px solid rgb(190, 182, 182);
}
.right{
    position: relative;
    margin-left:5px;
    display: flex;
    height: 50px;
}
.mark{
  margin-left:175px;
}
.left{
  margin-top:20px;
  margin-right:325px;
}
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 590px;
    height: 250px;
}

.flex-item {
    width: 220px;
    height: 100px;
    margin-top: 30px;
    margin-left:-10px;
}
.price{
  width: 220px;
  height: 100px;
   margin-top: 30px;
   margin-left: 80px;
}
.up{
  width: 200px;
  margin-top:-180px;
  margin-left: 100px;
}
.outtime{
  width: 200px;
  margin-left: 0px;
  margin-top:-200px;
}
</style>
