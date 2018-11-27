<template>
  <div id="index">
    <el-container direction="vertical" id="verContainer">
      <!-- 头部 -->
      <my-header></my-header>
      <el-container id="horContainer">
        <!-- 侧标菜单栏 -->
        <my-menu></my-menu>
        <!-- 页面 -->
        <my-page></my-page>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myHeader from '@/layout/header'
import myMenu from '@/layout/menu'
import myPage from '@/layout/page'
export default {
  components: {
    myHeader,
    myMenu,
    myPage
  }
}
</script>

<style lang="stylus">
#index{
  position: relative;
  width: 100%;
  height: 100%;
  #verContainer{
    height: 100%;
  }
  #horContainer{
    height: 100%;
  }
}
</style>
