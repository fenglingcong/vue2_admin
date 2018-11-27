<template>
  <div id="banner">
    <el-carousel :interval="4000" type="card" trigger="click" height="200px">
      <el-carousel-item>
        <div class="item-content">
          <img src="~@/assets/img/echo.jpg" alt="">
          <a href="https://github.com/fenglingcong/vue2_music" class="title" target="_blank">music</a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item-content">
          <img src="~@/assets/img/health.gif" alt="">
          <a href="https://github.com/fenglingcong/vue2_health" class="title" target="_blank">health</a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item-content">
          <img src="~@/assets/img/toutiao.jpg" alt="">
          <a href="https://github.com/fenglingcong/vue2_news" class="title" target="_blank">news</a>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang="stylus">
#banner{
  .el-carousel{
    margin-bottom: 25px;
  }
  .item-content{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
    }
    .title{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: #fff;
      &:hover{
        color: appColor;
      }
    }
  }
}
</style>
