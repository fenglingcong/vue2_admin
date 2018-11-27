<template>
  <el-aside id="menu" width="240px">
    <el-menu class="el-menu-container" :default-active="$route.name" :default-openeds="defaultOpeneds">
      <my-menu-item :json="filterRoutes"></my-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { routes } from '@/router'
export default {
  data () {
    return {
      filterRoutes: [], // 过滤后的路由
      defaultOpeneds: [] // 默认打开的二级菜单
    }
  },
  methods: {
    // 过滤出index路由
    handleIndexRoutes () {
      let filterRoutes = this.handleRoutes(routes)
      console.log(filterRoutes)
      let indexRoutes = filterRoutes.filter(route => route.name === 'index')[0]
      if (indexRoutes.children) {
        this.filterRoutes = indexRoutes.children
      }
    },
    // 过滤路由
    handleRoutes (Arr) {
      const Routes = Arr.filter(route => {
        if (route.name) {
          if (route.meta) {
            if (route.meta.hidden) {
              return false
            } else {
              if (route.meta.open) {
                this.defaultOpeneds.push(route.name)
              }
              return true
            }
          }
          if (route.children) {
            route.children = handleRoutes(route.children)
          }
        } else {
          return false
        }
      })
      return Routes
    }
  },
  created () {
    this.handleIndexRoutes()
  }
}
</script>

<style lang="stylus">
#menu{
  height: 100%;
  user-select: none;
  .el-menu-container{
    padding-bottom: 15px;
    min-height: 100%;
  }
}
</style>
