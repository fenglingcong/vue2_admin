<template>
  <div id="permission">
    <p>你的权限为：{{$store.state.user.role}}</p>
    <p class="switchBtn">
      <el-switch v-model="permission" inactive-text="admin" active-text="visitor"></el-switch>
    </p>
    <el-alert type="warning" :closable="false" title="注意：">
      <p>进入此页面的权限等级为：admin</p>
      <p>如果你切换为visitor，重新进入此页时你将无法进入，请刷新重新查看效果</p>
    </el-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      permission: false
    }
  },
  watch: {
    permission (val) {
      // 模拟不同权限
      if (val) {
        this.$store.commit('set_role', 'visitor')
      } else {
        this.$store.commit('set_role', 'admin')
      }
    }
  }
}
</script>

<style lang="stylus">
#permission{
  font-size: 14px;
  .switchBtn{
    margin: 30px 0;
  }
  .el-alert{
    width: 540px;
    font-size: 14px;
  }
}
</style>
