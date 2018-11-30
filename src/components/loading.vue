<template>
  <div v-if="visible">
    <div class="loading-com loading" v-if="visible === true">
      <slot><i class="el-icon-loading"></i>数据加载中...</slot>
    </div>
    <div class="loading-com nothing" v-else-if="visible === 'nothing'">
      <slot name="nothing">没有符合条件的数据</slot>
    </div>
    <div class="loading-com error" v-else-if="visible === 'error'">
      <slot name="error"><i class="el-icon-error"></i>请求错误，点击重新加载</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: [Boolean, String],
    reload: Function
  }
}
</script>

<style lang="stylus">
.loading-com{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  i{
    margin-right: 5px;
  }
}
.loading{
  color: #60a3f5;
}
.nothing{
  margin: 15px 0;
  color: #999;
}
.error{
  color: #ff4949;
}
</style>
