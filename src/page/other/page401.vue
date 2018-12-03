<template>
  <div id="page401" class="app-primary-bgColor">
    <div class="people">
      <img src="~@/assets/img/people.png" alt="">
    </div>
    <div class="text">
      <div class="text-401 slideUp">401</div>
      <div class="text-detail slideUp">路上看见对方付啦时刻的肌肤</div>
      <div class="text-title slideUp">手里的开发商到了饭卡</div>
      <p>
        <el-button class="goBack slideUp" round @click="$router.go(-1)">返回</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page401'
}
</script>

<style lang="stylus">
#page401{
  padding: 200px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .people{
    margin-right: 50px;
    display: inline-block;
  }
  .text{
    display: inline-block;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    .slideUp{
      opacity: 0;
      animation: slideUp 0.5s;
      animation-fill-mode: forwards;
    }
    .text-401{
      line-height: 160px;
      font-size: 100px;
      color: #333;
    }
    .text-detail{
      animation-delay: 0.1s;
    }
    .text-title{
      animation-delay: 0.2s;
    }
    .goBack{
      animation-delay: 0.3s;
    }
  }
}
@keyframes slideUp{
  0%{
    transform: translateY(60px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
