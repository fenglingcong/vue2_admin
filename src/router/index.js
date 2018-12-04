import Vue from 'vue'
import Router from 'vue-router'

// view组件是用在多层嵌套仍渲染在首页的page视图下的场景
const view = () => import('@/layout/view')

// 一级路由
const index = () => import('@/page/index/index')
const login = () => import('@/page/login/login')
const page401 = () => import('@/page/other/page401')
const page404 = () => import('@/page/other/page404')
// 二级路由
// home
const home = () => import('@/page/index/home/home')
// documents
const documents = () => import('@/page/index/documents/documents')
// permission
const permission = () => import('@/page/index/permission/permission')
// componentsView
const stickyView = () => import('@/page/index/componentsView/sticky_view')
const breadcrumbView = () => import('@/page/index/componentsView/breadcrumb_view')
const backTopView = () => import('@/page/index/componentsView/backTop_view')
const numToView = () => import('@/page/index/componentsView/numTo_view')
const loadingView = () => import('@/page/index/componentsView/loading_view')
// collections
const progressbar = () => import('@/page/index/collections/progressbar')
const clipboard = () => import('@/page/index/collections/clipboard')
const editor = () => import('@/page/index/collections/editor')
const markdown = () => import('@/page/index/collections/markdown')
// example
const dragList = () => import('@/page/index/example/dragList')
const dragTable = () => import('@/page/index/example/dragTable')
const upload = () => import('@/page/index/example/upload')
// charts
const pie = () => import('@/page/index/charts/pie')
const radar = () => import('@/page/index/charts/radar')
const scatter = () => import('@/page/index/charts/scatter')
// Excel
const exportExcel = () => import('@/page/index/excel/exportExcel')
const exportSelected = () => import('@/page/index/excel/exportSelected')
const importExcel = () => import('@/page/index/excel/importExcel')
// errorpage
const view401 = () => import('@/page/index/errorpage/view_401')
const view404 = () => import('@/page/index/errorpage/view_404')
// more
const errorlog = () => import('@/page/index/more/errorlog')
const icons = () => import('@/page/index/more/icons')
// i18nView
const i18nView = () => import('@/page/index/i18n/i18n_view')

Vue.use(Router)

export const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    redirect: '/index/home',
    meta: { login: true },
    component: index,
    children: [
      {
        path: 'home',
        name: 'home',
        icon: 'el-icon-my-home',
        component: home
      },
      {
        path: 'documents',
        name: 'documents',
        icon: 'el-icon-my-book',
        meta: { keep: true },
        component: documents
      },
      {
        path: 'permission',
        name: 'permission',
        icon: 'el-icon-my-lock',
        meta: { role: 'admin' },
        component: permission
      },
      {
        path: 'components',
        name: 'components',
        icon: 'el-icon-menu',
        redirect: '/index/components/sticky',
        component: view,
        children: [
          {
            path: 'sticky',
            name: 'sticky',
            icon: 'el-icon-my-thumbtack',
            component: stickyView
          },
          {
            path: 'breadcrumb',
            name: 'breadcrumb',
            icon: 'el-icon-arrow-right',
            component: breadcrumbView
          },
          {
            path: 'backTop',
            name: 'backTop',
            icon: 'el-icon-arrow-up',
            component: backTopView
          },
          {
            path: 'numTo',
            name: 'numTo',
            icon: 'el-icon-my-number',
            component: numToView
          },
          {
            path: 'loading',
            name: 'loading',
            icon: 'el-icon-my-spinner',
            component: loadingView
          }
        ]
      },
      {
        path: 'collections',
        name: 'collections',
        icon: 'el-icon-my-cube',
        redirect: '/index/collections/progressbar',
        component: view,
        children: [
          {
            path: 'progressbar',
            name: 'progressbar',
            icon: 'el-icon-my-progressbar',
            component: progressbar
          },
          {
            path: 'clipboard',
            name: 'clipboard',
            icon: 'el-icon-my-clipboard',
            component: clipboard
          },
          {
            path: 'editor',
            name: 'editor',
            icon: 'el-icon-my-pencil',
            component: editor
          },
          {
            path: 'markdown',
            name: 'markdown',
            icon: 'el-icon-my-markdown',
            component: markdown
          }
        ]
      },
      {
        path: 'example',
        name: 'example',
        icon: 'el-icon-my-ravelry',
        redirect: '/index/example/dragList',
        component: view,
        children: [
          {
            path: 'dragList',
            name: 'dragList',
            component: dragList
          },
          {
            path: 'dragTable',
            name: 'dragTable',
            component: dragTable
          },
          {
            path: 'upload',
            name: 'upload',
            component: upload
          }
        ]
      },
      {
        path: 'charts',
        name: 'charts',
        icon: 'el-icon-my-chart',
        redirect: '/index/charts/pie',
        component: view,
        children: [
          {
            path: 'pie',
            name: 'pie',
            component: pie
          },
          {
            path: 'radar',
            name: 'radar',
            component: radar
          },
          {
            path: 'scatter',
            name: 'scatter',
            component: scatter
          }
        ]
      },
      {
        path: 'excel',
        name: 'excel',
        icon: 'el-icon-my-excel',
        redirect: '/index/excel/exportExcel',
        component: view,
        children: [
          {
            path: 'exportExcel',
            name: 'exportExcel',
            component: exportExcel
          },
          {
            path: 'exportSelected',
            name: 'exportSelected',
            component: exportSelected
          },
          {
            path: 'importExcel',
            name: 'importExcel',
            component: importExcel
          }
        ]
      },
      {
        path: 'errorpage',
        name: 'errorpage',
        icon: 'el-icon-my-404',
        redirect: '/index/errorpage/page401',
        component: view,
        children: [
          {
            path: 'page401',
            name: 'page401',
            icon: 'el-icon-my-401',
            meta: { keep: true },
            component: view401
          },
          {
            path: 'page404',
            name: 'page404',
            icon: 'el-icon-my-404',
            meta: { keep: true },
            component: view404
          }
        ]
      },
      {
        path: 'more',
        name: 'more',
        icon: 'el-icon-my-more',
        redirect: '/index/more/errorlog',
        component: view,
        children: [
          {
            path: 'errorlog',
            name: 'errorlog',
            icon: 'el-icon-my-bug',
            meta: { keep: true },
            component: errorlog
          },
          {
            path: 'icons',
            name: 'icons',
            icon: 'el-icon-my-icons',
            meta: { keep: true },
            component: icons
          }
        ]
      },
      {
        path: 'i18nView',
        name: 'i18nView',
        icon: 'el-icon-my-i18n',
        component: i18nView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/401',
    name: '401',
    component: page401
  },
  {
    path: '/404',
    name: '404',
    component: page404
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
