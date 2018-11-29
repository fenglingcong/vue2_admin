<template>
  <div id="home">
    <my-banner></my-banner>
    <my-card></my-card>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="24" :lg="12"><my-table></my-table></el-col>
      <el-col :xs="24" :sm="12" :lg="6"><my-todo></my-todo></el-col>
      <el-col :xs="24" :sm="12" :lg="6"><my-self></my-self></el-col>
    </el-row>
    <a href="https://github.com/fenglingcong/vue2_admin" class="github" target="_blank">
      <div class="bg"></div>
      <i class="el-icon-my-github"></i>
    </a>
  </div>
</template>

<script>
import myBanner from './components/banner'
import myCard from './components/card'
import myTable from './components/homeTable'
import myTodo from './components/todo'
import mySelf from './components/self'
export default {
  components: {
    myBanner,
    myCard,
    myTable,
    myTodo,
    mySelf
  }
}
</script>

<style lang="stylus">
#home{
  padding: 10px 30px 20px 0;
}
.github{
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 99;
  width: 80px;
  height: 80px;
  &:hover .bg{
    border-top-color: #f56c6c;
  }
  .bg{
    width: 0;
    height: 0;
    border-right: 80px solid #f4516c;
    border-bottom: 80px solid rgba(0, 0, 0, 0);
  }
  i{
    position: absolute;
    top: 10%;
    right: 10%;
    transform: rotate(45deg);
    font-size: 40px;
    color: #fff;
  }
}
</style>
