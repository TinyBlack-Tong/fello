<template>
  <div>
    <div class="basic_information">

      <h2 style="margin-top: 50px">您的房源可以住几位房客？</h2>
      <h4 style="margin-top: 50px">请确保您准备了足够的床位，让所有房客都能舒适入住。</h4>

<!--      最多容纳房客人数-->
      <div class="room_basic_information">

        <div class="item-wrap">
          <div class="title">
            <h4>最多容纳房客人数</h4>
          </div>
          <div class="right">
            <div class="right-content">
              <el-button style="border-color: #1D976C" @click="minus_person_number()" icon="el-icon-minus" circle></el-button>
              <h3 style="border-color: #1D976C">{{pplMax}}</h3>
              <el-button style="border-color: #1D976C" @click="plus_person_number()" icon="el-icon-plus" circle></el-button>
            </div>
          </div>
        </div>

        <div class="item-wrap bg-item">
          <div class="title">
            <h3 style="color: #B0C4DE">有几张床？</h3>
            <h4>床铺数量</h4>
          </div>
          <div class="right">
            <div class="right-content">
              <el-button style="border-color: #1D976C" @click="minus_bed_number()" icon="el-icon-minus" circle></el-button>
              <h3 style="border-color: #1D976C">{{bedNum}}</h3>
              <el-button style="border-color: #1D976C" @click="plus_bed_number()" icon="el-icon-plus" circle></el-button>
            </div>
          </div>
        </div>

        <div class="item-wrap bg-item">
          <div class="title">
            <h3 style="color: #B0C4DE">有几间房间？</h3>
            <h4 style="">房间数量</h4>
          </div>
          <div class="right">
            <div class="right-content">
              <el-button style="border-color: #1D976C" @click="minus_bedroom_number()" icon="el-icon-minus" circle></el-button>
              <h3 style="border-color: #1D976C">{{bedroomNum}}</h3>
              <el-button style="border-color: #1D976C" @click="plus_bedroom_number()" icon="el-icon-plus" circle></el-button>
            </div>
          </div>
        </div>

        <div class="item-wrap bg-item">
          <div class="title">
            <h3 style="color: #B0C4DE">有几个卫生间？</h3>
            <h4>卫生间</h4>
          </div>
            <div class="right">
              <div class="right-content">
                <el-button style="border-color: #1D976C" @click="minus_toilet_number()" icon="el-icon-minus" circle></el-button>
                <h3 style="border-color: #1D976C">{{bathroomNum}}</h3>
                <el-button style="border-color: #1D976C" @click="plus_toilet_number()" icon="el-icon-plus" circle></el-button>
              </div>
            </div>
          </div>
        </div>


          <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">继续</el-button>
          <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>

        </div>
    </div>



  </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            //最大入住人数
            pplMax:1,
            //床数
            bedroomNum:1,
            //卫生间数量
            bathroomNum:1,
            //
            bedNum:1,
          }
      },
      methods:
        //最大入住人数
        {
        minus_person_number(){
          this.pplMax--;
          if (this.pplMax==0){
            this.pplMax=1;
          }
          console.log(this.outman)
        },
        plus_person_number(){
          this.pplMax++;
          if (this.pplMax==11){
            this.pplMax=10;
          }
        },
          //床数
          minus_bed_number(){
            this.bedNum--;
            if (this.bedNum==0){
              this.bedNum=1;
            }
          },
          plus_bed_number(){
            this.bedNum++;
            if (this.bedNum==10){
              this.bedNum=9;
            }
          },
          //卫生间
          minus_toilet_number(){
          this.bathroomNum--;
          if (this.bathroomNum==0){
            this.bathroomNum=1;
          }
        },
        plus_toilet_number(){
          this.bathroomNum++;
          if (this.bathroomNum==6){
            this.bathroomNum=5;
          }

        },
        goto_prier(){
          this.$router.push({
            path:'/room_publish_index'
          })
        },
        //房间数
          minus_bedroom_number(){
            this.bedroomNum--;
            if (this.bedroomNum==0){
              this.bedroomNum=1;
            }
          },
          plus_bedroom_number(){
            this.bedroomNum++;
            if (this.bedroomNum==10){
              this.bedroomNum=9;
            }
          },
        goto_next(){
          const data = this.$route.query
          console.log(data)
          this.$router.push({
            path:'/room_publish_location',
            query: {
              city: data.city,
              type: data.type,
              pplMax: this.pplMax,
              bedroomNum: this.bedroomNum,
              bedNum: this.bedNum,
              bathroomNum: this.bathroomNum
            }
          })
        },
      },
    
    }
</script>

<style scoped>
  .basic_information{
    position: absolute;
    top: 0px;
    left: 120px;
    text-align: left;
  }
  .person_number{
    /*border-style: solid;*/
    margin-top: 50px;
    display: flex;
    height: auto;
  }
  .room_basic_information{
    /*border-style: solid;*/
    display: flex;
    flex-direction: column;
  }
  .item-wrap{
    display: flex;
    margin-top: 20px;
  }

  .item-wrap .title {
    width: 200px;
    height: 50px;
    line-height: 50px;
  }

  .bg-item {
    height: 100px;
  }

  .item-wrap .right{
    display: flex;
    align-items: flex-end;
  }

  .item-wrap .right-content {
    display: flex;
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
