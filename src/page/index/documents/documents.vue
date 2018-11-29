<template>
  <div id="document">
    <a href="https://github.com/fenglingcong/vue2_admin" target="_blank"><el-button type="primary">Github</el-button></a>
    <el-tooltip class="item" effect="dark" content="复制" placement="top">
      <el-button type="primary" v-clipboard:copy="1539027251" v-clipboard:success="onCopySuccess">QQ交流：1539027251</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    onCopySuccess () {
      this.$message.success('复制成功')
    }
  }
}
</script>

<style lang="stylus">
#document{
  .el-button{
    min-width: 160px;
  }
}
</style>
