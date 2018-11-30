<template>
  <div id="bread">
    <div class="bread-item">
      <el-alert title="默认调用" type="success" :closable="false"></el-alert>
      <my-breadcrumb></my-breadcrumb>
    </div>
    <div class="bread-item">
      <el-alert title="自定义分隔符" type="info" :closable="false"></el-alert>
      <my-breadcrumb separator="/"></my-breadcrumb>
    </div>
    <div class="bread-item">
      <el-alert title="自定义分隔符图标" type="warning" :closable="false"></el-alert>
      <my-breadcrumb separatorClass="el-icon-success"></my-breadcrumb>
    </div>
  </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb'
export default {
  components: {
    'my-breadcrumb': breadcrumb
  }
}
</script>

<style lang="stylus">
#bread{
  .bread-item{
    margin-bottom: 30px;
    .el-alert{
      margin-bottom: 20px;
      width: 50%;
    }
  }
}
</style>
