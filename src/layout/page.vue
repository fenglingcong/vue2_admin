<template>
  <el-main>
    {{msg}}
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  data () {
    return {
      msg: 'page page'
    }
  }
}
</script>

<style lang="stylus"></style>
