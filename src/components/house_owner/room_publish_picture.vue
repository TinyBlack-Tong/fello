<template>
    <div class="room_publish_picture">
      <h2 style="margin-top: 50px">添加照片</h2>

      <div class="upload">
      <el-upload
        :limit=2
        action="#"
        list-type="picture-card"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div class="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      </div>


      <h2 style="margin-top: 50px">为您的民宿取个名字吧！</h2>
      <el-input style="margin-top: 20px" v-model="title" placeholder=""></el-input>


      <h2 style="margin-top: 50px">房客什么时候可以入住？</h2>

      <h2 style="margin-top: 50px">从：</h2>
      <el-time-select
        v-model="checkinTimeFrom"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
         }"
        placeholder="选择时间">
      </el-time-select>
      <h2 style="margin-top: 50px">到：</h2>
      <el-time-select
        v-model="checkinTimeTo"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
         }"
        placeholder="选择时间">
      </el-time-select>

      <h2 style="margin-top: 50px">退房时间</h2>
      <el-time-picker
        v-model="checkoutTime"
        value-format="HH:mm"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点">
      </el-time-picker>


      <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">继续</el-button>
      <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>
    </div>
</template>

<script>
    export default {
        name: "",

      data() {
        return {
          //标题
          title:"527",
          //
          value1: new Date(2016, 9, 10, 18, 40),
          value2: new Date(2016, 9, 10, 18, 40),
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
          checkinTimeFrom:'',
          options: [{
            value1: '选项1',
            label1: '下午1点'
          }, {
            value1: '选项2',
            label1: '下午2点'
          }, {
            value1: '选项3',
            label1: '下午3点'
          }, {
            value1: '选项4',
            label1: '下午4点'
          }, {
            value1: '选项5',
            label1: '任选时间'
          }],
          checkinTimeTo: '',
          options2: [{
            value2: '选项1',
            label1: '上午10点'
          }, {
            value2: '选项2',
            label1: '上午11点'
          }, {
            value2: '选项3',
            label1: '上午12点'
          }, {
            value2: '选项4',
            label1: '下午1点'
          }, {
            value2: '选项5',
            label1: '下午2点'
          }],
          checkoutTime:'',
          options3: [{
            value3: '选项1',
            label1: '1人'
          }, {
            value3: '选项2',
            label1: '2人'
          }, {
            value3: '选项3',
            label1: '3人'
          }, {
            value3: '选项4',
            label1: '4人'
          }, {
            value3: '选项5',
            label1: '5人'
          }],
        };

      },
      methods: {
        handleRemove(file) {
          console.log(file);
        },
        handlePictureCardPreview(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        },
        handleDownload(file) {
          console.log(file);
        },
        goto_prier(){
          this.$router.push({
            path:'/room_publish_location'
          })
        },
        goto_next(){
          const data = this.$route.query
          console.log(data)
          this.$router.push({
            path:'/room_publish_room_information',
            query:{
              city: data.city,
              type: data.type,
              pplMax: data.pplMax,
              bedroomNum: data.bedroomNum,
              bedNum: data.bedNum,
              bathroomNum: data.bathroomNum,
              location: data.location,
              title: this.title,
              checkinTimeFrom: this.checkinTimeFrom,
              checkinTimeTo: this.checkinTimeTo,
              checkoutTime: this.checkoutTime
            }
          })
        },
      }
    }
</script>

<style scoped>
  .room_publish_picture{
    position: absolute;
    top: 0px;
    left: 120px;
    text-align: left;
  }
  .upload{
    display: flex;
    flex-direction: column;
  }
  .file{
    border-style: solid;
    display: flex;
    flex-direction: row-reverse;
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
