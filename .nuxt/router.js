import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _655d0da2 = () => interopDefault(import('..\\pages\\books\\index.vue' /* webpackChunkName: "pages/books/index" */))
const _1fa28eca = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _10ce58e0 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _81c0bfc2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4dcf7e7a = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _00c8df46 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _ba3ebbbc = () => interopDefault(import('..\\pages\\shelf\\index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _216864d2 = () => interopDefault(import('..\\pages\\admins\\all-books\\index.vue' /* webpackChunkName: "pages/admins/all-books/index" */))
const _959a6e30 = () => interopDefault(import('..\\pages\\admins\\book-requests\\index.vue' /* webpackChunkName: "pages/admins/book-requests/index" */))
const _7bf4e5c6 = () => interopDefault(import('..\\pages\\admins\\dashboard.vue' /* webpackChunkName: "pages/admins/dashboard" */))
const _3c6469e1 = () => interopDefault(import('..\\pages\\admins\\register.vue' /* webpackChunkName: "pages/admins/register" */))
const _33eaa1ca = () => interopDefault(import('..\\pages\\admins\\update-record\\index.vue' /* webpackChunkName: "pages/admins/update-record/index" */))
const _e9e1e78c = () => interopDefault(import('..\\pages\\admins\\users.vue' /* webpackChunkName: "pages/admins/users" */))
const _73f2f270 = () => interopDefault(import('..\\pages\\admins\\users.vue\\index.vue' /* webpackChunkName: "pages/admins/users.vue/index" */))
const _52479e5c = () => interopDefault(import('..\\pages\\admins\\all-books\\add-new-book.vue' /* webpackChunkName: "pages/admins/all-books/add-new-book" */))
const _ec717120 = () => interopDefault(import('..\\pages\\admins\\all-books\\edit\\_id.vue' /* webpackChunkName: "pages/admins/all-books/edit/_id" */))
const _192de550 = () => interopDefault(import('..\\pages\\admins\\book-requests\\_id.vue' /* webpackChunkName: "pages/admins/book-requests/_id" */))
const _1f35d6df = () => interopDefault(import('..\\pages\\admins\\update-record\\_id\\index.vue' /* webpackChunkName: "pages/admins/update-record/_id/index" */))
const _9de71690 = () => interopDefault(import('..\\pages\\books\\_id\\index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _151005f0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _655d0da2,
    name: "books"
  }, {
    path: "/dashboard",
    component: _1fa28eca,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _10ce58e0,
    name: "inspire"
  }, {
    path: "/login",
    component: _81c0bfc2,
    name: "login"
  }, {
    path: "/profile",
    component: _4dcf7e7a,
    name: "profile"
  }, {
    path: "/register",
    component: _00c8df46,
    name: "register"
  }, {
    path: "/shelf",
    component: _ba3ebbbc,
    name: "shelf"
  }, {
    path: "/admins/all-books",
    component: _216864d2,
    name: "admins-all-books"
  }, {
    path: "/admins/book-requests",
    component: _959a6e30,
    name: "admins-book-requests"
  }, {
    path: "/admins/dashboard",
    component: _7bf4e5c6,
    name: "admins-dashboard"
  }, {
    path: "/admins/register",
    component: _3c6469e1,
    name: "admins-register"
  }, {
    path: "/admins/update-record",
    component: _33eaa1ca,
    name: "admins-update-record"
  }, {
    path: "/admins/users",
    component: _e9e1e78c,
    name: "admins-users"
  }, {
    path: "/admins/users.vue",
    component: _73f2f270,
    name: "admins-users.vue"
  }, {
    path: "/admins/all-books/add-new-book",
    component: _52479e5c,
    name: "admins-all-books-add-new-book"
  }, {
    path: "/admins/all-books/edit/:id",
    component: _ec717120,
    name: "admins-all-books-edit-id"
  }, {
    path: "/admins/book-requests/:id?",
    component: _192de550,
    name: "admins-book-requests-id"
  }, {
    path: "/admins/update-record/:id",
    component: _1f35d6df,
    name: "admins-update-record-id"
  }, {
    path: "/books/:id",
    component: _9de71690,
    name: "books-id"
  }, {
    path: "/",
    component: _151005f0,
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
