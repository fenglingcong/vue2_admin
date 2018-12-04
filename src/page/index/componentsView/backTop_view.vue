<template>
  <div id="backtop">
    <el-alert :closable="false" type="success" title="默认调用：大于高度就会显示backTop组件，height: 400px; bottom: 30px; right: 30px;"></el-alert>
    <my-backTop></my-backTop>
    <div class="blank"></div>
    <el-alert :closable="false" type="warning" title="改变样式、高度、位置、监听：大于高度就会显示backTop组件，height: 200px; bottom: 100px; right: 30px;"></el-alert>
    <my-backTop :height="200" :bottom="100" @complete="handleComplete">
      <el-button type="warning" round>返回顶部</el-button>
    </my-backTop>
    <div class="blank"></div>
    <div class="blank"></div>
    <div class="blank"></div>
  </div>
</template>

<script>
import backTop from '@/components/backTop'
export default {
  components: {
    'my-backTop': backTop
  },
  methods: {
    handleComplete () {
      this.$message.success('滚动到达顶部')
    }
  }
}
</script>

<style lang="stylus">
#backtop{
  .blank{
    width: 300px;
    height: 300px;
    background: #eee;
    border-radius: 10px;
    margin: 20px 0;
  }
  .el-alert{
    width: 50%;
  }
}
</style>
