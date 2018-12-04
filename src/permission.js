import router from '@/router'
import store from '@/store'
import cache from '@/utils/cache'

// 登录验证 权限验证
router.beforeEach((to, from, next) => {
  // 是否需要登录
  if (to.matched.some(record => record.meta.login)) {
    if (cache.getToken()) {
      if (to.path === 'login') {
        next('/')
      } else {
        // 是否有用户信息
        if (store.state.user) {
          assessPermission(store.state.user.role, to.meta.role, next)
        } else {
          store.dispatch('get_user_data')
            .then(res => {
              assessPermission(res.role, to.meta.role, next)
            })
            .catch(err => {
              console.log(err)
              // 默认token失效
              next({ path: '/login', query: { redirect: to.fullPath } })
            })
        }
      }
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    if (to.path === '/login' && cache.getToken()) {
      next('/')
    } else {
      next()
    }
  }
})

function assessPermission (userRole, pageRole, next) {
  let pass = false
  // 页面不需要权限 || 用户是管理员
  if (!pageRole || userRole.indexOf('admin') > -1) pass = true
  // 符合页面中的其中一项权限（支持string和Array写法）
  if (typeof pageRole === 'string') {
    if (userRole.indexOf(pageRole) > -1) pass = true
  } else if (Array.isArray(pageRole)) {
    if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
  }
  pass ? next() : next('/401')
}
