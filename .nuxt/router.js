import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _301d5652 = () => interopDefault(import('..\\pages\\books\\index.vue' /* webpackChunkName: "pages/books/index" */))
const _31e4c896 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _05a81f3b = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _ed584aec = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _07b78eb8 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _99148bdc = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _2574e957 = () => interopDefault(import('..\\pages\\shelf\\index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _1dea8487 = () => interopDefault(import('..\\pages\\admins\\all-books\\index.vue' /* webpackChunkName: "pages/admins/all-books/index" */))
const _5f84061d = () => interopDefault(import('..\\pages\\admins\\book-requests\\index.vue' /* webpackChunkName: "pages/admins/book-requests/index" */))
const _0f34509e = () => interopDefault(import('..\\pages\\admins\\dashboard.vue' /* webpackChunkName: "pages/admins/dashboard" */))
const _40680e96 = () => interopDefault(import('..\\pages\\admins\\register.vue' /* webpackChunkName: "pages/admins/register" */))
const _df482760 = () => interopDefault(import('..\\pages\\admins\\update-record\\index.vue' /* webpackChunkName: "pages/admins/update-record/index" */))
const _5b03aba5 = () => interopDefault(import('..\\pages\\admins\\users.vue' /* webpackChunkName: "pages/admins/users" */))
const _70751225 = () => interopDefault(import('..\\pages\\admins\\users.vue\\index.vue' /* webpackChunkName: "pages/admins/users.vue/index" */))
const _4a842906 = () => interopDefault(import('..\\pages\\admins\\all-books\\add-new-book.vue' /* webpackChunkName: "pages/admins/all-books/add-new-book" */))
const _341884a5 = () => interopDefault(import('..\\pages\\admins\\all-books\\edit\\_id.vue' /* webpackChunkName: "pages/admins/all-books/edit/_id" */))
const _04b22876 = () => interopDefault(import('..\\pages\\admins\\book-requests\\_id.vue' /* webpackChunkName: "pages/admins/book-requests/_id" */))
const _9cd8da6c = () => interopDefault(import('..\\pages\\admins\\update-record\\_id\\index.vue' /* webpackChunkName: "pages/admins/update-record/_id/index" */))
const _2d7d66a3 = () => interopDefault(import('..\\pages\\books\\_id\\index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _80a7911a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/books",
    component: _301d5652,
    name: "books"
  }, {
    path: "/dashboard",
    component: _31e4c896,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _05a81f3b,
    name: "inspire"
  }, {
    path: "/login",
    component: _ed584aec,
    name: "login"
  }, {
    path: "/profile",
    component: _07b78eb8,
    name: "profile"
  }, {
    path: "/register",
    component: _99148bdc,
    name: "register"
  }, {
    path: "/shelf",
    component: _2574e957,
    name: "shelf"
  }, {
    path: "/admins/all-books",
    component: _1dea8487,
    name: "admins-all-books"
  }, {
    path: "/admins/book-requests",
    component: _5f84061d,
    name: "admins-book-requests"
  }, {
    path: "/admins/dashboard",
    component: _0f34509e,
    name: "admins-dashboard"
  }, {
    path: "/admins/register",
    component: _40680e96,
    name: "admins-register"
  }, {
    path: "/admins/update-record",
    component: _df482760,
    name: "admins-update-record"
  }, {
    path: "/admins/users",
    component: _5b03aba5,
    name: "admins-users"
  }, {
    path: "/admins/users.vue",
    component: _70751225,
    name: "admins-users.vue"
  }, {
    path: "/admins/all-books/add-new-book",
    component: _4a842906,
    name: "admins-all-books-add-new-book"
  }, {
    path: "/admins/all-books/edit/:id",
    component: _341884a5,
    name: "admins-all-books-edit-id"
  }, {
    path: "/admins/book-requests/:id?",
    component: _04b22876,
    name: "admins-book-requests-id"
  }, {
    path: "/admins/update-record/:id",
    component: _9cd8da6c,
    name: "admins-update-record-id"
  }, {
    path: "/books/:id",
    component: _2d7d66a3,
    name: "books-id"
  }, {
    path: "/",
    component: _80a7911a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
