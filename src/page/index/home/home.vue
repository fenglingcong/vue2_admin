<template>
  <div id="home">
    <my-banner></my-banner>
    <my-card></my-card>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="24" :lg="12"><my-table></my-table></el-col>
      <el-col :xs="24" :sm="12" :lg="6"><my-todo></my-todo></el-col>
      <el-col :xs="24" :sm="12" :lg="6"><my-self></my-self></el-col>
    </el-row>
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
  },
  data () {
    return {
      msg: 'home home home'
    }
  }
}
</script>

<style lang="stylus"></style>
