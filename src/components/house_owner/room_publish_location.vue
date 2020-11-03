<template>
    <div class="room_publish_location">
      <h2 style="margin-top: 50px">确定您的房源位置</h2>
      <div class="country">
        <h3 >国家/地区</h3>
        <el-select style="margin-top: 20px" v-model="value" disabled placeholder="中国">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="city">
        <h2 style="margin-top: 20px">省(直辖市、自治区) / 市(区)</h2>
        <el-select style="margin-top: 20px" v-model="city" placeholder="城市">
          <el-option
            v-for="item1 in options"
            :key="item1.value"
            :label="item1.label1"
            :value="item1.value1">
          </el-option>
        </el-select>
      </div>

      <div class="final_location">
        <h2 style="margin-top: 20px">详细地址或小区名称</h2>
      <h3 style="color: #B0C4DE;margin-top: 20px">    例：「北京信息科技大学」或「同路人公司」</h3>
        <el-input style="margin-top: 20px" v-model="location" placeholder="输入您的地址"></el-input>
      </div>

      <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">继续</el-button>
      <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>


    </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            location:'北京信息科技大学527',
          options: [{
            value1: '选项1',
            label1: '北京'
          }, {
            value1: '选项2',
            label1: '上海'
          }, {
            value1: '选项3',
            label1: '广州'
          }, {
            value1: '选项4',
            label1: '陕西'
          }, {
            value1: '选项5',
            label1: '天津'
          }],
            city: '',

        }
      },
      methods:{
        goto_prier(){
          this.$router.push({
            path:'/room_publish_basic'
          })
        },
        goto_next(){
          const data = this.$route.query
          console.log(data)
          this.$router.push({
            path:'/room_publish_picture',
            query: {
              city: data.city,
              type: data.type,
              pplMax: data.pplMax,
              bedroomNum: data.bedroomNum,
              bedNum: data.bedNum,
              bathroomNum: data.bathroomNum,
              location: this.location
            }
          })
        }
      }
    }
</script>

<style scoped>
  .room_publish_location{
    position: absolute;
    top: 0px;
    left: 120px;
    text-align: left;
  }
  .country{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  .city{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  .final_location{
    display: flex;
    flex-direction: column;
    margin-top: 40px;

  }
  .goto_next{
    position: absolute;
    bottom: -100px;
    left:400px ;
  }
  .goto_prier{
    position: absolute;
    bottom: -100px;
    left:-20px ;

  }
</style>
