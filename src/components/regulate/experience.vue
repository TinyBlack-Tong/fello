<template>
  <div>
    <h1>缤纷体验</h1>
    <p>多彩风景，多彩人生</p>
    <div class="scene-container" @click="respon()">
        <img :src="ayana_pic" class="sbox-pic" @click="respon()"/>
        <h1 class="sbox-bar">阿雅娜</h1>
        <div class="pois-left" @click="respon()">
            <img :src="balidao_pic"  class="sbox-minipic"/>
            <h1 class="minibar">巴厘岛</h1>
        </div>
        <div class="pois-left" style="margin-top:220px" @click="respon()">
            <img :src="dibai_pic"  class="sbox-minipic"/>
            <h1 class="minibar"> 迪拜</h1>
        </div>
    </div>
    <div class="scene-container" @click="respon()">
       <div class="pois-right" @click="respon()">
            <img :src="tokyo_pic"  class="sbox-minipic"/>
            <h1 class="minibar">东京</h1>
        </div>
        <div class="pois-right1" style="margin-top:220px" @click="respon()">
            <img :src="weinisi_pic"  class="sbox-minipic"/>
            <h1 class="minibar"> 威尼斯</h1>
        </div>
        <img :src="merdaf_pic" class="sbox-pic1" @click="respon()"/>
        <h1 class="sbox-bar1">马尔代夫</h1>
    </div>
    <div class="scene-container" @click="respon()">
        <img :src="hainan_pic" class="sbox-bigpic"/>
        <h1 class="sbox-bar">海南</h1>
    </div>
  </div>
</template>

<script>
import ayana from "../../assets/scene/阿雅娜.jpeg"
import balidao from "../../assets/scene/巴厘岛.jpeg"
import dibai from "../../assets/scene/迪拜.jpeg"
import tokyo from "../../assets/scene/东京.jpeg"
import weinisi from "../../assets/scene/威尼斯.jpeg"
import merdaf from "../../assets/scene/马尔代夫.jpeg"
import hainan from "../../assets/scene/hainan.jpeg"
  export default{
    data(){
      return{
        ayana_pic:ayana,
        balidao_pic:balidao,
        dibai_pic:dibai,
        tokyo_pic:tokyo,
        weinisi_pic:weinisi,
        merdaf_pic:merdaf,
        hainan_pic:hainan,
      }
    },
    methods:{
        respon(){
            this.$message({
            message: '敬请期待',
            })
        }
    }
  }
</script>

<style>
.scene-container{
    display:flex;
    margin-top:20px;
    margin-left:50px;
    height: 410px;
}
.sbox-pic{
    border-radius: 5%; 
    position: absolute;
    width:800px;
    height:420px;
    z-index: -1;
}
.sbox-minipic{
    border-radius: 5%; 
    position: absolute;
    width:350px;
    height:200px;
    z-index: -1;
}
.sbox-bar{
    margin-top:350px;
    margin-left:20px;
    color:white;
}
.minibar{
    margin-top:160px;
    margin-left:100px;
    width:100px;
    color:white;
}
.sbox-bar1{
    margin-top:350px;
    margin-left:300px;
    width:120px;
    color:white;
}
.pois-left{
    margin-left:730px;
    position: absolute;
}
.pois-right{
    margin-left:-100px;
}
.pois-right1{
    margin-left:-200px;
}
.sbox-pic1{
    border-radius: 5%; 
    position: absolute;
    width:800px;
    height:420px;
    z-index: -1;
    margin-left: 380px;
}
.sbox-bigpic{
    border-radius: 5%; 
    position: absolute;
    width:1180px;
    height:420px;
    z-index: -1;
}
.sbox-pic:hover{opacity: 0.8;}
.sbox-pic1:hover{opacity: 0.8;}
.sbox-minipic:hover{opacity: 0.8;}
.sbox-bigpic:hover{opacity: 0.8;}
</style>