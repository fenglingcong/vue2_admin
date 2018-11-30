<template>
  <el-main id="page">
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  name: 'page'
}
</script>

<style lang="stylus">
#page{
  height: fit-content;
  min-height: 100%;
  background: #fff;
  overflow: auto;
}
</style>
