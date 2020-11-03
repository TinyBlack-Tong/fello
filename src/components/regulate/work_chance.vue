<template>
<div>
 <div class="pic-container">
    <img :src="pic" class="pic">
    <figure class="circle">
      <h1 class="title">加入我们</h1>
      <h3 class="h3-color">我们有多元的就业方向，以及完备的培养计划,</h3>
      <h3 class="h3-color">拥有良好的办公环境，丰富的办公资源,</h3>
      <h3 class="h3-color">加入我们实现你毕生的梦想，请将简历发送至:</h3>
      <h3 class="h3-color">tongluren@xx.com</h3>
      <h3 class="h3-color">HR阅读完您的简历，即刻联系您</h3>
    </figure>
  </div> 
  <div class="pic-space">
    
    <div class="single" @click="slot()">
        <img :src="pic_coder" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">程序员</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_idsigner" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">界面设计师</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_sdeigner" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">框架设计师</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_manger" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">项目经理</h3>
        </figure>
    </div>
  </div>
  <div class="pic-space">
    <div class="single" @click="slot()">
        <img :src="pic_en" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">工作环境</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_teach" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">培养计划</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_resource" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">开发资源</h3>
        </figure>
    </div>
    <div class="single" @click="slot()">
        <img :src="pic_kefu" class="item"/>
        <figure class="bar">
          <h3 class="h3-color">客服</h3>
        </figure>
    </div>
  </div>
</div>
</template>

<script>
import joinus from "../../assets/work/joinus.jpeg"
import coder from "../../assets//work/coder.jpg"
import idesigner from "../../assets//work/interface_designer.jpg"
import manger from "../../assets//work/manger.jpg"
import sdesigner from "../../assets//work/structure_designer.jpg"
import kefu from "../../assets//work/kefu.jpg"
import en from "../../assets//work/en.jpg"
import teach from "../../assets//work/teach.jpg"
import resource from "../../assets//work/resource.jpeg"
   export default {
      data() {
        return {
            pic:joinus,//背景图片
            pic_coder:coder,
            pic_idsigner:idesigner,
            pic_manger:manger,
            pic_sdeigner:sdesigner,
            pic_kefu:kefu,
            pic_en:en,
            pic_teach:teach,
            pic_resource:resource,
        }
      },
      methods: {
        slot(){
            this.$message({
            message: '敬请期待',
            })
        }
      },
   }
</script>

<style>
.pic-container {
    display: -webkit-flex;
    display: flex;
    width: 1300px;
    height: 600px;
    margin-top: -20px;
    margin-left: -20px;
}
.pic-space{
  margin-top:20px;
  display: flex;
  width: 1200px;
  height:200px;
  margin-left:10px;
}

.pic{
  position:absolute;
  width:1300px;
  height:600px;
  z-index: -1;
}
.circle{
  border-radius: 50%; 
  height: 600px; 
  width: 600px; 
  margin-left: 10px;
  background: #8fc5ad;
}
.title{
  margin-top: 180px;
  color:white;
}
.item{
  width:250px;
  height:200px;
  z-index: -1;
}
.bar{
  width:250px;
  height:30px;
  margin-top:-35px;
  position:absolute;
  background-color:  #8fc5ad;
}
.single{
  width:250px;
  height:200px;
  margin-left:50px;
}
.single:hover{
 opacity: 0.8;
}
/*el-button */
.el-button{
     border: 1px solid rgb(212, 212, 212);
    background: #42b983;
     color: white;
}
.el-button:hover{
    border: 1px solid rgb(212, 212, 212);
    background-color:white;
    color: #42b983;
}
.el-button:active{
    border: 1px solid rgb(212, 212, 212);
    background: #42b983;
     color: white;
}
.el-button:focus{
    border: 1px solid rgb(212, 212, 212);
    background-color:white;
    color: #42b983; 
}
.h3-color{
  margin-top:5px; 
  color: white;
}
</style>