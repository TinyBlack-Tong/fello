<template>
  <div>
    <div class="basic_information">

      <h2 style="margin-top: 50px">您的房源可以住几位房客？</h2>
      <h4 style="margin-top: 50px">请确保您准备了足够的床位，让所有房客都能舒适入住。</h4>

<!--      最多容纳房客人数-->
      <div class="room_basic_information">
      <div class="person_number">
      <h4>最多容纳房客人数</h4>
      </div>

        <div class="button_place_one">
        <el-button style="border-color: #1D976C" @click="minus_person_number()" icon="el-icon-minus" circle></el-button>
        <h3 style="margin-left:25px;margin-right:25px;position: relative;top: 10px;border-color: #1D976C">{{pplMax}}</h3>
        <el-button style="border-color: #1D976C" @click="plus_person_number()" icon="el-icon-plus" circle></el-button>
      </div>

        <div class="bed_number_information">
        <h3 style="margin-top: 40px;color: #B0C4DE">有几张床？</h3>
        <h4 style="margin-top: 100px;margin-left: -80px">床铺数量</h4>
        </div>
        <div class="button_place_two">
        <el-button style="border-color: #1D976C" @click="minus_bed_number()" icon="el-icon-minus" circle></el-button>
        <h3 style="margin-left:25px;margin-right:25px;position: relative;top: 10px;border-color: #1D976C">{{bedroomNum}}</h3>
          <el-button style="border-color: #1D976C" @click="plus_bed_number()" icon="el-icon-plus" circle></el-button>
        </div>

        <div class="washroom_number_information">
          <h3 style="margin-top: 60px;color: #B0C4DE">有几个卫生间？</h3>
          <h4 style="margin-top: 140px;margin-left: -110px">卫生间</h4>

          <div class="button_place_three">
            <el-button style="border-color: #1D976C" @click="minus_toilet_number()" icon="el-icon-minus" circle></el-button>
            <h3 style="margin-left:25px;margin-right:25px;position: relative;top: 10px;border-color: #1D976C">{{bathNum}}</h3>
            <el-button style="border-color: #1D976C" @click="plus_toilet_number()" icon="el-icon-plus" circle></el-button>
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
            bathNum:1,
            //

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

          console.log(this.$route.params.city)
        },
          //床数
          minus_bed_number(){
            this.bedroomNum--;
            if (this.bedroomNum==0){
              this.bedroomNum=1;
            }
          },
          plus_bed_number(){
            this.bedroomNum++;
            if (this.bedroomNum==10){
              this.bedroomNum=9;
            }
          },
          //卫生间
          minus_toilet_number(){
          this.bathNum--;
          if (this.bathNum==0){
            this.bathNum=1;
          }
        },
        plus_toilet_number(){
          this.bathNum++;
          if (this.bathNum==6){
            this.bathNum=5;
          }

        },
        goto_prier(){
          this.$router.push({
            path:'/room_publish_index'
          })
        },
        goto_next(){
          this.$router.push({
            path:'/room_publish_location'
          })
        },

      }
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
  .bed_number_information{
    display: flex;
    /*border-style: solid;*/

  }
  .button_place_one{
    display: flex;
    position: absolute;
    top: 180px;
    left: 200px;
    /*border-style: solid;*/
  }
  .button_place_two{
    /*border-style: solid;*/
    display: flex;
    position: absolute;
    top: 320px;
    left: 200px;
  }
  .button_place_three{
    display: flex;
    position: absolute;
    top: 130px;
    left: 200px;

  }
  .washroom_number_information{
    position: relative;
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
