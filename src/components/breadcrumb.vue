<template>
  <div class="my-breadcrumb">
    <el-breadcrumb v-if="separator" :separator="separator">
      <el-breadcrumb-item v-for="(item, index) in json" :key="index" :to="item.path">{{translation(item.name, 'routes')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb v-else :separator-class="separatorClass ? separatorClass : 'el-icon-arrow-right'">
      <el-breadcrumb-item v-for="(item, index) in json" :key="index" :to="item.path">{{translation(item.name, 'routes')}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { translation } from '@/utils/i18n'
export default {
  props: {
    separator: String,
    separatorClass: String
  },
  data () {
    return {
      json: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    translation,
    // 获取当前路由
    getBreadcrumb () {
      this.json = this.$route.matched.filter(item => item.name)
    }
  },
  mounted () {
    this.getBreadcrumb()
  }
}
</script>

<style lang="stylus"></style>
