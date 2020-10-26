<template xmlns="http://www.w3.org/1999/html">

<!--/**-->
<!--* @Author:张彤-->
<!--* @Date: 2:19 下午 2020/9/29-->
<!--*/-->
  <div>
<!--  固定在页面顶部的搜索框 以及注册和登录-->

    <div class="top_place">
<!--  <Affix>-->
    <div id="control_color">
    <div id="logo_image">
    <img :src="logo_url" width="100px" height="100px" >
    </div>
<!--    搜索框-->
    <div class="search_bar">
      <div id="search_image_div">
      <img :src='search_image' width="28px" height="28px" >
      </div>
      <input v-model="research_content" v-on:keyup.enter="search()" placeholder="回车一下,你就知道~" id="input"></input>
    </div>
<!--    右上方的注册以及登录以及用户头像-->
    <div class="submit">
      <Button class="user_button">手机端</Button>
      <Button class="user_button" @click="order_center()">房源订单中心</Button>
      <Button class="user_button" @click="dialogVisible1 = true">注册</Button>
      <el-dialog
        title="注册"
        :visible.sync="dialogVisible1"
        width="30%"
        :lock-scroll="true"
        :before-close="handleClose">
        <el-form :model="dynamicValidateForm1" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
            <el-input v-model="dynamicValidateForm1.email"></el-input>
          </el-form-item>
          <el-form-item
            prop="identify_code"
            label="验证码">
            <el-input v-model="dynamicValidateForm1.identify_code"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false" >确 定</el-button>
  </span>
      </el-dialog>
<!--      对话框 dialog-->
      <Button type="text" class="user_button" @click="dialogVisible = true">登录</Button>
<!--      <el-button type="text" @click="dialogVisible = true" >点击打开 Dialog</el-button>-->
      <el-dialog
        title="登录"
        :visible.sync="dialogVisible"
        width="30%"
        :lock-scroll="true"
        :before-close="handleClose">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]">
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
            prop="user_password"
            label="密码">
            <el-input v-model="dynamicValidateForm.identify_code"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false" >确 定</el-button>
  </span>
      </el-dialog>
<!--      头像区域-->
      <div class="demo-avatar" @click="show_frame" v-show="headImage_flag">
        <Avatar icon="ios-person"  size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
      </div>
      <div id="frame" v-show="frame_flag">
        <div id="frame_button">
        <Button>个人资料</Button>
        <div class="split_in_frame">
        </div>
        <Button>账号</Button>
        <div class="split_in_frame">
        </div>
        <Button>退出</Button>
        </div>
      </div>
    </div>
    </div>
<!--  </Affix>-->
  </div>
        <router-view></router-view>

    <div id="bottom_place">
      <!--      分割线-->
      <div class="split">
      </div>
      <div id="bottom_place_bar">
        <!--        同路人-->
        <div id="fellow_people">
          <Button @click="info"><h2>同路人</h2></Button>
          <Button @click="info">工作机会</Button>
          <Button @click="info">同路人新闻</Button>
          <Button @click="info">政策</Button>
        </div>
        <!--        发现-->
        <div id="discover">
          <Button @click="info"><h2>发现</h2></Button>
          <Button @click="info">信任与安全</Button>
          <Button @click="info">缤纷体验</Button>
          <Button @click="info">同路人杂志</Button>
        </div>
        <!--     出租   -->
        <div id="hire">
          <Button @click="info"><h2>出租</h2></Button>
          <Button @click="info">待客之道</Button>
          <Button @click="info">房东义务</Button>
          <Button @click="info">开展体验</Button>
        </div>
        <!--      客服  -->
        <div id="service">
          <Button @click="info"><h2>发现</h2></Button>
          <Button @click="info">信任与安全</Button>
          <Button @click="info">缤纷体验</Button>
          <Button @click="info">同路人杂志</Button>
        </div>
      </div>
    </div>

    <!--    bottom 一些按钮-->
    <div class="author">
      Author:tong tong
    </div>

    <div class="notice" v-show="order_center_flag">
      <h3 style="text-align: left;margin:10px;position: relative;top: 5px;">房源订单中心</h3>
      <div class="split">
      </div>
      <h4 style="text-align: left;margin: 10px">您还没有预定过房源，点击「开始探索」开启下一段旅程吧</h4>
<!--      <Button class="button" @click="goto_discover()">开始探索</Button>-->
      <el-button  class="button" @click="goto_discover(),open2()">开始探索</el-button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            research_content:"",
            order_center_flag:false,
            is_room_order:false,
            //element_UI中对话框变量
            dialogVisible: false,
            dynamicValidateForm: {
              domains: [{
                value: ''
              }],
              email: '',
              identify_code:'',
            },
            dialogVisible1:false,
            dynamicValidateForm1: {
              domains: [{
                value: ''
              }],
              email: '',
              identify_code:'',
            },
            value2:0,
            //logo同路人的图片地址
            logo_url:require('../../assets/logo5.png'),
            //search——bar的图片
            search_image:require("../../assets/research.png"),
            //当鼠标移入到头像按钮的时候,用于显示frame
            frame_flag:false,

            //是否显示头像
            headImage_flag:false,
            // //城市列表
            // city_name_button:[{
            //   city_name:"北京",
            // },{
            //   city_name:"天津",
            // }],
          }
      },
      methods:{
          show_frame(){
            this.frame_flag=!this.frame_flag
          },
        //在搜索框内回车直接查询
        search(){
            this.$router.push({
            path: "/room_search_result",
            query:{
                content:this.search_content
            }

          })
        },
        order_center(){
            //如果用户此时还没有预订相关的民宿房间,在房源订单中心的label下方展示frame
            if (this.is_room_order==false)
            {
              this.order_center_flag=!this.order_center_flag

            }else{
              this.$router.push({
                path: "/order",
              })
            }

        },
        ok () {
          this.$Message.info('点击了确定');
        },
        //弹框消息
        open2() {
          this.$message({
            message: '快来探索吧',
            type: 'success'
          });
        },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
      //  点击开始探索
      goto_discover(){
        this.$router.push({
          path: "/",
        }),
          this.order_center_flag=false
      }
    }

    }
</script>

<style scoped>
  .top_place{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 45px;
    /*background-color:	#42b983;*/
    /*border-style: solid;*/
  }
  /*最顶层的固定bar*/
  #control_color{
    width: 100%;
    height: 45px;
    /*background-color:	#42b983;*/
    background-image: linear-gradient(to right,#F8FFAE,#43C6AC);
    opacity: 0.9;
  }
  /*搜索框的bar*/
  .search_bar{
    position: absolute;
    top: -67px;
    left: 50px;
    display: flex;
    margin: 70px;
    height:40px;
    width: 400px;
    border-width:1px;
    border-style: solid;
    border-color: white;;
    border-radius: 9px;
    background-color: white;
  }
  /*用户登录以及注册区域*/
  .submit{
    position: absolute;
    top: 10px;
    right: 120px;
    height: 45px;
    width: 300px;
    display: flex;
    align-self: end;
    margin-right: 10px;

  }
  /*头像区域*/
  .demo-avatar{
    position: relative;
    top: -5px;
    margin-left: 10px;
  }

  #input{
    width: 400px;
    height: 40px;
    border-style: none;
    outline: none;
    background-color: transparent;
  }
  #search_image_div{
    margin: 5px;
  }

  /*logo图像的css*/
  #logo_image{
    position: absolute;
    top: -25px;
    left: 5px;
    width:10px;
    height: 10px;
  }
  /*用户按钮的css*/
  .user_button{
    position: relative;
    top:0px;
    border-style: none;
    background-color: transparent;
    color: white;
    font-size: 15px;
    margin-left: 11px;

    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  }
  .user_button:hover{
    background-color: white;
    color: #42b983;
  }

  /*作者*/
  /**
  *@Author:张彤
  *@Date: 2:21 下午 2020/9/29
  **/
  .author{
    color: white;
  }
  #frame{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 160px;
    height: 110px;
    top: 40px;
    left: 240px;
    background: white;
    flex: 1;
    justify-content: start;
  }
  .split_in_frame{
    margin-top: -20px;
    width: 120px;
    position: relative;
    height: 1px;
    left: 20px;
    background: #42b983;
  }
  #frame_button{
    margin-top: 10px;
  }
  #dialog_submit{
    position: absolute;
    top: 100px;
    left: 100px;
  }
  /*下方*/
  #bottom_place{
    position: relative;
    top: 500px;
    margin-top: 90px;
  }
  .split{
    width: 100%;
    height: 1px;
    background-color: 	#C0C0C0;
  }
  /*bottom_同路人*/
  #fellow_people{
    position: relative;
    left: 30px;
    display: flex;
    width: 200px;
    flex-direction: column;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    border-style: none;
  }
  /*bottom_发现*/
  #discover{
    position: relative;
    left: 130px;
    display: flex;
    width: 200px;
    flex-direction: column;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    border-style: none;
  }
  #hire{
    position: relative;
    left: 230px;
    display: flex;
    width: 200px;
    flex-direction: column;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    border-style: none;
  }
  #service{
    position: relative;
    left: 330px;
    display: flex;
    width: 200px;
    flex-direction: column;
    font-family:"Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    border-style: none;
  }
  #bottom_place_bar{
    margin-top: 30px;
    display: flex;
  }
  .notice{
    position: absolute;
    top: 50px;
    right: 130px;
    width: 400px;
    height: 150px;
    border: none;
    background: white;
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  .button{
    margin-top: 20px  ;
    border:none;
    background: #42b983;
    color: white;
    width: 200px;
    text-align: center  ;
  }
  /*.button:hover{*/
  /*  background: white;*/
  /*  color: #42b983;*/
  /*}*/
  Button{
    border-style: none;
    text-align: left;
    margin-bottom: 20px;
  }
  el-dialog{
    z-index: 100;
  }
</style>
