<template>
  <div class="room_publish_room_price">
  <h2 style="margin-top: 50px">为房源定价</h2>
  <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">
    开启智能定价，让房源每晚价格随您所在地区的需求变化而自动调整，保持最佳竞争力。
  </h3>
    <h2 style="margin-top: 50px">基础价格</h2>
    <el-input style="margin-top: 20px;width: 470px" v-model="price" placeholder="单位:人民币"></el-input>
    <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">继续</el-button>
    <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>
  </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            price:100,
          }
      },
      methods:{
        goto_prier(){
          this.$router.push({
            path:'/room_publish_room_information'
          })
        },
        goto_next(){
          const data = this.$route.query
          console.log(data)
          this.$router.push({
            path:'/room_publish_phone',
            query: {
              city: data.city,
              type: data.type,
              pplMax: data.pplMax,
              bedroomNum: data.bedroomNum,
              bedNum: data.bedNum,
              bathroomNum: data.bathroomNum,
              location: data.location,
              title: data.title,
              checkinTimeFrom: data.checkinTimeFrom,
              checkinTimeTo: data.checkinTimeTo,
              checkoutTime: data.checkoutTime,
              tags: data.tags,
              description: data.description,
              price:this.price
            }
          })
        },

      }
    }
</script>

<style scoped>
  .room_publish_room_price{
    position: absolute;
    top: 0px;
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
