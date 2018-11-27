<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
}
</style>
