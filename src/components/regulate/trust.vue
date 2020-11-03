<template>
  <div>
    <h1 class="top-head">信任与安全</h1>
    <h3 class="trust-head">在社会科学中，信任被认为是一种依赖关系。值得信任的个人或团体意味着他们寻求实践政策，道德守则，法律和其先前的承诺。而安全建立在信任之上</h3>
    <div class="aLine"></div>
    <div>
        <h1 class="trust-head3">科学设计，保障安全</h1>
        <h2 class="trust-head4">同路人设计的初衷就是为了安全的交易</h2>
    </div>
    <div class="trust-container">
        <div class="trust-box">
            <img :src="assess_pic" class="tbox-pic"/>
            <h3 class="tbox-head">风险评估</h3>
            <p class="tbox-text">每一笔爱彼迎预订在确认之前都会通过风险评分。我们利用预测分析和机器学习即时评估数百个指标，帮助我们在可疑活动发生之前将其标记出来并加以调查。</p>
        </div>
        <div class="trust-box">
            <img :src="house_pic" class="tbox-pic"/>
            <h3 class="tbox-head">房屋设备</h3>
            <p class="tbox-text">我们探究每个房屋的来源及背景，确保他们是安全的房屋。我们与当地的房东和当地机关做好交流，确保在当地的环境安全，此外我们还为房屋准备了报警器等设备，确保您的安全。</p>
        </div>
        <div class="trust-box">
            <img :src="identity_pic" class="tbox-pic"/>
            <h3 class="tbox-head">实名认证</h3>
            <p class="tbox-text">我们对每一位房东以及租客做了实名认证，并了解他们的背景信息等，并以此评估他们的安全水平，不符合要求的会被强制下线整改，确保每次交易的双方都是守信的人。</p>
        </div>
    </div>
    <div class="trust-container">
        <div class="trust-box">
            <img :src="pay_pic" class="tbox-pic"/>
            <h3 class="tbox-head">安全支付</h3>
            <p class="tbox-text">我们支持多种方式付款，并且这些付款平台都是非常安全的，而且每笔交易的记录都会发到您的手机里，并且您可以申请退款。</p>
        </div>
        <div class="trust-box">
            <img :src="timg_pic" class="tbox-pic"/>
            <h3 class="tbox-head">账号保护</h3>
            <p class="tbox-text">您的信息我们做了加密处理，因此我们相对于其他平台更加能保护的您的个人隐私安全，除了你没有人知道您的个人信息，并且在您每次修改后都会发送短信到您的手机，确保是您本人操作。</p>
        </div>
        <div class="trust-box">
            <img :src="safe_pic" class="tbox-pic"/>
            <h3 class="tbox-head">预防诈骗</h3>
            <p class="tbox-text">同路人平台不会向您发任何网址，以及索取您的信息和个人密码，所有交易都是在线上完成，不会有其他方式交易。如有意外情况请立即联系客服以及当地公安局。</p>
        </div>
    </div>
  </div>
</template>

<script>
import assess from "../../assets/trust_pic/assess.jpg"
import house from "../../assets/trust_pic/house.jpeg"
import identity from "../../assets/trust_pic/identity.jpeg"
import pay from "../../assets/trust_pic/pay.jpeg"
import safe from "../../assets/trust_pic/safe.jpg"
import timg from "../../assets/trust_pic/timg.jpeg"
  export default{
    data(){
      return{
          assess_pic:assess,
          house_pic:house,
          identity_pic:identity,
          pay_pic:pay,
          safe_pic:safe,
          timg_pic:timg
      }
    }
  }
</script>

<style>
.top-head{
    font-size:40px;
}
.trust-head{
    text-align: left;
    width:900px;
    margin-top:40px;
    margin-left:120px;
    font-size:20px;
}
.trust-head2{
    margin-top:50px;
    text-align: left;
    margin-left:120px;
}
.trust-head3{
    font-size:25px;
    text-align: left;
    margin-left:120px;
    margin-top:30px;
}
.trust-head4{
    font-size:15px;
    text-align: left;
    margin-left:120px;
}
.aLine {
    margin-top:40px;
    margin-left: 100px;
    background-color:rgb(209, 202, 202);
    height:1px;
    width:1000px;
}
.trust-container{
    display: flex;
    margin-left:20px;
    margin-top:30px;
}
.trust-box{
  margin-left:120px;
  margin-top:30px;
  width:250px;
}
.tbox-head{
 text-align: left;
 font-size:23px;
 margin-top:20px;
}
.tbox-pic{
    width: 140px;
    height: 100px;
    margin-left:-50px;
}
.tbox-text{
    margin-top:20px;
    text-align: left;
    width: 200px;
    font-size: 18px;
}
</style>