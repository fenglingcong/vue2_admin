<template>
  <div>
    <my-sticky>
      <el-button type="primary">固定在最顶部</el-button>
      <el-button type="primary">固定在最顶部</el-button>
    </my-sticky>
    <div class="sticky-blank"></div>
    <div class="sticky-blank"></div>
    <my-sticky :offsetTop="50" @change="stickyChange">
      <el-button type="primary">固定在距顶部50px的位置，病监听sticky变化</el-button>
    </my-sticky>
    <div class="sticky-blank"></div>
    <div class="sticky-blank"></div>
    <my-sticky :offsetBottom="20">
      <el-button type="primary">固定在距底部20px的位置</el-button>
    </my-sticky>
    <div class="sticky-blank"></div>
    <div class="sticky-blank"></div>
    <div class="sticky-blank"></div>
  </div>
</template>

<script>
export default {
  methods: {
    stickyChange (val) {
      this.$message.info('sticky的值为：' + val)
    }
  }
}
</script>

<style lang="stylus">
.sticky-blank{
  margin: 20px 0;
  width: 300px;
  height: 300px;
  background: #eee;
  border-radius: 10px;
}
</style>
