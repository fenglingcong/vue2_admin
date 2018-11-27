<template>
  <div id="home">
    <my-banner></my-banner>
    <my-card></my-card>
    <my-table></my-table>
    <my-todo></my-todo>
    <my-self></my-self>
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
