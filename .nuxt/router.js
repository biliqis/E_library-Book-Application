import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5dae6e20 = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _c3bca4d2 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _44fb419d = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _c31fa528 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _ad1f0322 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _5e86e3f0 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7abeb720 = () => interopDefault(import('../pages/shelf/index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _6f0b7903 = () => interopDefault(import('../pages/admins/all-books/index.vue' /* webpackChunkName: "pages/admins/all-books/index" */))
const _1366522d = () => interopDefault(import('../pages/admins/book-requests/index.vue' /* webpackChunkName: "pages/admins/book-requests/index" */))
const _b6b9e2d4 = () => interopDefault(import('../pages/admins/dashboard.vue' /* webpackChunkName: "pages/admins/dashboard" */))
const _03e5e711 = () => interopDefault(import('../pages/admins/register.vue' /* webpackChunkName: "pages/admins/register" */))
const _28a14ccc = () => interopDefault(import('../pages/admins/update-record/index.vue' /* webpackChunkName: "pages/admins/update-record/index" */))
const _20521d0a = () => interopDefault(import('../pages/admins/users.vue' /* webpackChunkName: "pages/admins/users" */))
const _776c80b6 = () => interopDefault(import('../pages/admins/users.vue/index.vue' /* webpackChunkName: "pages/admins/users.vue/index" */))
const _dd22191e = () => interopDefault(import('../pages/password/change-password.vue' /* webpackChunkName: "pages/password/change-password" */))
const _6a7b4b96 = () => interopDefault(import('../pages/password/email.vue' /* webpackChunkName: "pages/password/email" */))
const _75ffcb30 = () => interopDefault(import('../pages/password/reset.vue' /* webpackChunkName: "pages/password/reset" */))
const _151798fe = () => interopDefault(import('../pages/admins/all-books/add-new-book.vue' /* webpackChunkName: "pages/admins/all-books/add-new-book" */))
const _57792f14 = () => interopDefault(import('../pages/admins/all-books/edit/_id.vue' /* webpackChunkName: "pages/admins/all-books/edit/_id" */))
const _62ccfbd5 = () => interopDefault(import('../pages/admins/book-requests/_id.vue' /* webpackChunkName: "pages/admins/book-requests/_id" */))
const _3ca3d0f6 = () => interopDefault(import('../pages/admins/update-record/_id/index.vue' /* webpackChunkName: "pages/admins/update-record/_id/index" */))
const _f8d8284a = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _566eeb56 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5dae6e20,
    name: "books"
  }, {
    path: "/dashboard",
    component: _c3bca4d2,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _44fb419d,
    name: "inspire"
  }, {
    path: "/login",
    component: _c31fa528,
    name: "login"
  }, {
    path: "/profile",
    component: _ad1f0322,
    name: "profile"
  }, {
    path: "/register",
    component: _5e86e3f0,
    name: "register"
  }, {
    path: "/shelf",
    component: _7abeb720,
    name: "shelf"
  }, {
    path: "/admins/all-books",
    component: _6f0b7903,
    name: "admins-all-books"
  }, {
    path: "/admins/book-requests",
    component: _1366522d,
    name: "admins-book-requests"
  }, {
    path: "/admins/dashboard",
    component: _b6b9e2d4,
    name: "admins-dashboard"
  }, {
    path: "/admins/register",
    component: _03e5e711,
    name: "admins-register"
  }, {
    path: "/admins/update-record",
    component: _28a14ccc,
    name: "admins-update-record"
  }, {
    path: "/admins/users",
    component: _20521d0a,
    name: "admins-users"
  }, {
    path: "/admins/users.vue",
    component: _776c80b6,
    name: "admins-users.vue"
  }, {
    path: "/password/change-password",
    component: _dd22191e,
    name: "password-change-password"
  }, {
    path: "/password/email",
    component: _6a7b4b96,
    name: "password-email"
  }, {
    path: "/password/reset",
    component: _75ffcb30,
    name: "password-reset"
  }, {
    path: "/admins/all-books/add-new-book",
    component: _151798fe,
    name: "admins-all-books-add-new-book"
  }, {
    path: "/admins/all-books/edit/:id",
    component: _57792f14,
    name: "admins-all-books-edit-id"
  }, {
    path: "/admins/book-requests/:id?",
    component: _62ccfbd5,
    name: "admins-book-requests-id"
  }, {
    path: "/admins/update-record/:id",
    component: _3ca3d0f6,
    name: "admins-update-record-id"
  }, {
    path: "/books/:id",
    component: _f8d8284a,
    name: "books-id"
  }, {
    path: "/",
    component: _566eeb56,
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
