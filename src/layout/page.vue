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
  overflow: auto;
}
</style>
