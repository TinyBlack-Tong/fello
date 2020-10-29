<template>
  <div class="room_publish_information">

       <h2 style="margin-top: 50px">描述下您的房源</h2>
    <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">描述房源特色，列出房内配备的特殊便利设施，比如极速无线网络、停车场等。同时，告诉大家房源所在街区有何魅力。</h3>


    <el-input
      type="textarea"
      autosize
      style="margin-top: 20px"
      placeholder="请输入内容"
      v-model="description">
    </el-input>

    <h2 style="margin-top: 50px">为您的房源起个名字</h2>
    <h3 style="width:500px;color: #B0C4DE;margin-top: 20px">为房源起一个能突出其独特之处的标题，吸引更多房客</h3>

    <el-input
      type="text"
      placeholder="请输入内容"
      v-model="title"
      maxlength="10"
      show-word-limit
    >
    </el-input>
    <h2 style="margin-top: 50px">再为您的房源写个标签吧</h2>
    <el-tag
      style="margin-top: 20px"
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input

      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>



    <el-button class="goto_next"  @click="goto_next()" style="background: #1D976C;color: white">继续</el-button>
    <el-button class="goto_prier" @click="goto_prier()" style="background: #1D976C;color: white">上一步</el-button>
  </div>

</template>

<script>
    export default {
        name: "",
      data(){
          return{
            description:"牛逼",
            title:"同路人宿舍",
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
          };

      },
      methods: {
        handleClose(tag) {
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
          this.inputVisible = true;
          this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
          });
        },

        handleInputConfirm() {
          let inputValue = this.inputValue;
          if (inputValue) {
            this.dynamicTags.push(inputValue);
          }
          this.inputVisible = false;
          this.inputValue = '';
        },
        goto_prier(){
          this.$router.push({
            path:'/room_publish_location'
          })
        },
        goto_next(){
          this.$router.push({
            path:'/room_publish_price'
          })
        },
      }
    }
</script>

<style scoped>
  .room_publish_information{
    position: absolute;
    top: 0px;
    left: 120px;
    text-align: left;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
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
