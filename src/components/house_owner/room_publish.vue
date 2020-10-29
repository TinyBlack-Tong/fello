<template>
    <div>
      <Affix :offset-top="0" @on-change="change">

      <div class="header">
        <div id="logo_image" @click="goto_index()">
          <img :src="logo_url"  width="50px" height="50px" >
        </div>
      </div>
      </Affix>
      <img style="position: absolute;width:500px;height:750px;top: 10px;z-index: -1;"
           src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png">
      <keep-alive><router-view></router-view></keep-alive>

    </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            //logo同路人的图片地址
            logo_url:require('../../assets/sakula.png'),
          }
      },
      methods:{
        goto_index(){
          this.$router.push({
            path: "/",
          })

        },
      },
      mounted() {
        this.$router.push({
          path:'/room_publish_index'
        })

      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  #logo_image{
    position: absolute;
    top: 0px;
    left: 20px;
    width:10px;
    height: 10px;
  }

</style>
