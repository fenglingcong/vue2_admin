<template>
  <div id="app">
    <router-view/>
    <my-backtop :height="200"></my-backtop>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import backTop from '@/components/backTop'
import cache from '@/utils/cache'
export default {
  name: 'App',
  components: { 'my-backtop': backTop },
  methods: {
    initProgress () {
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    },
    initLanguage () {
      let lang = cache.getSession('language')
      if (lang) {
        this.$store.commit('set_language', lang)
      }
    }
  },
  created () {
    this.$Progress.start()
    this.initProgress()
    this.initLanguage()
  },
  mounted () {
    this.$Progress.finish()
  }
}
</script>

<style lang="stylus">
#app {
  height: 100%;
  a{
    color: appColor;
    text-decoration: none;
  }
  .app-primary-color{
    color: appColor;
  }
  .app-primary-bgColor{
    background-color: appColor;
  }
  .app-primary-borderColor{
    border: 1px solid appColor;
  }
  .login-bgColor{
    background: linear-gradient(#55c08f, appColor);
  }
  .login-inputColor{
    input{
      background-color: appColor;
      border: 1px solid appColor;
    }
  }
  .sortable-choose{
    background-color: #f0f9eb;
  }
  .sortable-ghost{
    background-color: appColor;
  }
}
</style>
