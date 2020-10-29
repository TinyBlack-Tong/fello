<template>
<div>
    <h1>管理页面</h1>
    <div v-for="(item) in uncensored" :key=item.name>
            <div class="rect" >
                <div class="flex-container">
                    <h5 class="name" style="color:#006400;">房屋标题:{{item.title}}</h5>
                    <div class="tag-place">
                        <div v-for="(word) in myspliter(item.tags)" :key="word" >
                            <el-tag class="my-tag">{{word}}</el-tag>
                        </div>
                    </div>
                    <h5 class="name-right">创建者id：{{item.ownerId}}</h5>
                </div>
                <div class="flex-container"> 
                    <h5 class="name">地址：{{item.location}}</h5>
                   
                </div>
                 <div class=flex-container>
                     <h5 class="name">电话:{{item.phone}}</h5>
                 </div>
                <el-collapse v-model="activeNames" @change="handleChange" class="unfold">
                    <el-collapse-item title="详细信息" name="1" class="co-title">
                        <div class=flex-container>
                            <h5 class="flex-item">城市:{{item.city}}</h5>
                            <h5 class="flex-item">房屋类型:{{item.type}}</h5> 
                            <h5 class="flex-item">最大入住数:{{item.pplMax}}</h5> 
                        </div>
                        <div class="flex-container">
                            <h5 class="flex-item">卧室数量:{{item.bedroomNum}}</h5>  
                            <h5 class="flex-item">床数:{{item.bedNum}}</h5>  
                            <h5 class="flex-item">卫生间数量:{{item.bashroomNum}} </h5>
                        </div>
                         <div class="flex-container">
                             <h5 class="flex-item">入住开始时间:{{item.checkinTimeFrom}}</h5>
                             <h5 class="flex-item">入住结束时间:{{item.checkinTImeTo}}</h5>
                             <h5 class="flex-item">退房时间:{{item.checkoutTime}}</h5>
                        </div>
                        <div class="draw">房屋描述：</div>
                        <h4 class="house_introduction_word">{{item.description}}</h4>
                         <div class="draw">房屋照片：</div>
                        <img :src="item.url" class="pic">
                    </el-collapse-item>
                </el-collapse>
                 <div class=flex-container>
                     <h5 class="name">价钱:{{item.price}}元</h5>
                </div>
                <div class="button_box">
                    <div class="dicon"><el-button icon="el-icon-close" circle class="button-color" @click="openDialog(item.id)"></el-button></div>
                    <div class="dicon"><el-button icon="el-icon-check" circle class="button-color" @click="check(item.id)"></el-button></div>
                </div>
            </div> 
    </div>
    <el-pagination
       background
       layout="prev, pager, next"
       page-size="10"
       :total="total"
       @current-change="page">
     </el-pagination>
     <el-dialog title="拒绝" :visible.sync="dialogFormVisible">
         <el-form>
            <el-form-item label="拒绝原因" :label-width="this.formLabelWidth">
                 <el-input v-model="temp_reason" autocomplete="off" @input="onInput()"></el-input>
             </el-form-item>
         </el-form>
         <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="del(temp_id)">确 定</el-button>
        </div>
     </el-dialog>
</div>  
</template>

<script>
import hmm from "../../assets/hanmeimei.jpg"
export default {
    
    name:'',
    computed:{
        myspliter() {
            return function(string){
                return string.split(" ");         
            }           
        } 
    },
    data() {
        return{
            formLabelWidth: '120px',
            temp_reason:"1",
            temp_id:"",
            dialogFormVisible: false,
            uncensored:[{
                id:"01",//房间id
                ownerId:"o0001",//申请人名称
                title:"bistu宿舍",//房间标题
                location:"北京市朝阳区",//房屋地址
                type:"0",//房屋类型
                pplMax:"10",//最大入住人5
                bedroomNum:"7",//卧室数量
                bedNum:"10",//床数
                bashroomNum:"7",//卫生间数量
                url:hmm,//图片
                description:"——+——+——+——+——+——+——+——+——+——+——+——+——+——+——+——+——+——+</br>"+"+++++",//房间描述
                city:"北京",//房屋所在城市   
                phone:"123456789",//手机号
                price:"100",//价格
                checkinTimeFrom:"2020-10-25",//入住开始时间
                checkinTImeTo:"2020-10-29",//入住结束时间
                checkoutTime:"2020-10-30",//退房时间
                tags:"干净 整洁 便宜",
                reason:""//不批准原因
            },
            {
                id:"02",
                ownerId:"o0002",
                title:"学一公寓",
                location:"深圳市",
                type:"0",
                pplMax:"10",
                bedroomNum:"7",
                bedNum:"10",
                bashroomNum:"7",
                url:hmm,
                description:"47方的高级灰北欧风空间，位于杭州中心武林广场商圈的高级公寓，楼下即时五星酒店。超大落地窗俯瞰西湖，一览杭州中心夜景。100寸大屏幕加极米Z6自带哈曼卡顿音箱，让您感受家庭影院的冲击。",
                city:"深圳",
                phone:"247398346",
                price:"100",
                checkinTimeFrom:"2020-10-25",
                checkinTImeTo:"2020-10-29",
                checkoutTime:"2020-10-30",
                tags:"干净1 整洁 便宜 nb++_________",
                reason:""
            },]
        }
    },
    methods:{
        openDialog(id){
            this.temp_id=id
            this.dialogFormVisible = true
        },
        del(id){
            this.dialogFormVisible = false
            this.$message({
            message: '删除成功',
            type: 'warning'
            });
            const _this=this
            this.$axios.delete('http://localhost:8181/'+id+_this.reason).then(function(resp){
             this.$message('这是一条消息提示');
             window.location.reload()
           })
        },
        check(id){
            this.$message({
            message: '批准成功',
            type: 'success'
            });
            this.$axios.check('http://localhost:8181/'+id).then(function(resp){
             alert('批准成功')
             window.location.reload()
           })
        },
        page(currentPage){
           //alert(currentPage)
           const _this=this
           this.$axios.get('http://localhost:8181/product/OfindAll/'+this.uid+'/'+currentPage+'/10').then(function(resp){
             console.log("data:"+resp)
             _this.uncensored=resp.data.content
             _this.total=resp.data.totalElements
             })
         },
        onInput(){
            this.$forceUpdate();
        }
    },
    created(){
         const _this=this
         this.$axios.get('http://localhost:8181/product/OfindAll/'+'/1/10').then(function(resp){
           console.log("data:"+resp)
           _this.uncensored=resp.data.content
           _this.total=resp.data.totalElements
         })
       }
}
</script>

<style>
.rect {
  margin-top:10px;
  margin-left:100px;
  /*height: 225px;*/
  width: 1100px;
  border: 1px solid rgb(190, 182, 182);
}
.flex-container {
    display: -webkit-flex;
    display: flex;
    width: 1100px;
    height: 40px;
    margin-left: 50px;
}

.flex-item {
   color:#2F4F4F;
    width: 400px;
    height: 10px;
    margin-left: -50px;
    margin-top:0px;
    text-align: left;
}
.name{
    font-size: 15px;
    
    width: 220px;
    height: 40px;
    margin-top: 20px;
    text-align: left;
}
.name-right{
    position: relative;
    font-size: 15px;
    width: 220px;
    height: 40px;
    margin-left: 600px;
    margin-top: 20px;
    text-align: left;
}
.unfold{
    width: 1000px;
    margin-left: 50px;
    margin-top: 10px;
}
.draw{
    text-align: left;
}
.pic{
    float:left;
    width:200px;
    height:200px;
}
.button_box{
    display: flex;
    margin-left: 930px;
}
.dicon {
   
    margin-top: 10px;
    font-size: 30px;
    height:60px;
    margin-left: 20px;
}
.button-color{
     background: #42b983;
     color: white;
}
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
.house_introduction_word{
    width: 800px;
    background: gainsboro;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 10px;
    text-align: left;
  }
  .el-tag{
     height: 30px;
     margin-left:10px;
     margin-top: 15px;
     background: #42b983; 
     color:white;
  }
  .tag-place{
      display: flex;
      position: relative;
      margin-left: 0px;
      width:60px;
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
</style>