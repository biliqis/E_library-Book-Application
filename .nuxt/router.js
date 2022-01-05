import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _85595362 = () => interopDefault(import('../pages/books/index.vue' /* webpackChunkName: "pages/books/index" */))
const _e003f294 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _4209567c = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _292823ea = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _352d300e = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _033b6af1 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _a2699c62 = () => interopDefault(import('../pages/shelf/index.vue' /* webpackChunkName: "pages/shelf/index" */))
const _50b9ab78 = () => interopDefault(import('../pages/admins/all-books/index.vue' /* webpackChunkName: "pages/admins/all-books/index" */))
const _1a517aee = () => interopDefault(import('../pages/admins/book-requests/index.vue' /* webpackChunkName: "pages/admins/book-requests/index" */))
const _00250497 = () => interopDefault(import('../pages/admins/dashboard.vue' /* webpackChunkName: "pages/admins/dashboard" */))
const _d986a620 = () => interopDefault(import('../pages/admins/register.vue' /* webpackChunkName: "pages/admins/register" */))
const _1acafb4a = () => interopDefault(import('../pages/admins/update-record/index.vue' /* webpackChunkName: "pages/admins/update-record/index" */))
const _8d0d88ea = () => interopDefault(import('../pages/admins/users.vue' /* webpackChunkName: "pages/admins/users" */))
const _2ce170e6 = () => interopDefault(import('../pages/admins/users.vue/index.vue' /* webpackChunkName: "pages/admins/users.vue/index" */))
const _32df5872 = () => interopDefault(import('../pages/password/change-password.vue' /* webpackChunkName: "pages/password/change-password" */))
const _92c84714 = () => interopDefault(import('../pages/password/email.vue' /* webpackChunkName: "pages/password/email" */))
const _9e4cc6ae = () => interopDefault(import('../pages/password/reset.vue' /* webpackChunkName: "pages/password/reset" */))
const _152fc720 = () => interopDefault(import('../pages/admins/all-books/add-new-book.vue' /* webpackChunkName: "pages/admins/all-books/add-new-book" */))
const _37d52b9a = () => interopDefault(import('../pages/admins/all-books/edit/_id.vue' /* webpackChunkName: "pages/admins/all-books/edit/_id" */))
const _043d60d6 = () => interopDefault(import('../pages/admins/book-requests/_id.vue' /* webpackChunkName: "pages/admins/book-requests/_id" */))
const _8d361074 = () => interopDefault(import('../pages/admins/update-record/_id/index.vue' /* webpackChunkName: "pages/admins/update-record/_id/index" */))
const _12eab1ba = () => interopDefault(import('../pages/books/_id/index.vue' /* webpackChunkName: "pages/books/_id/index" */))
const _21c44af4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _85595362,
    name: "books"
  }, {
    path: "/dashboard",
    component: _e003f294,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _4209567c,
    name: "inspire"
  }, {
    path: "/login",
    component: _292823ea,
    name: "login"
  }, {
    path: "/profile",
    component: _352d300e,
    name: "profile"
  }, {
    path: "/register",
    component: _033b6af1,
    name: "register"
  }, {
    path: "/shelf",
    component: _a2699c62,
    name: "shelf"
  }, {
    path: "/admins/all-books",
    component: _50b9ab78,
    name: "admins-all-books"
  }, {
    path: "/admins/book-requests",
    component: _1a517aee,
    name: "admins-book-requests"
  }, {
    path: "/admins/dashboard",
    component: _00250497,
    name: "admins-dashboard"
  }, {
    path: "/admins/register",
    component: _d986a620,
    name: "admins-register"
  }, {
    path: "/admins/update-record",
    component: _1acafb4a,
    name: "admins-update-record"
  }, {
    path: "/admins/users",
    component: _8d0d88ea,
    name: "admins-users"
  }, {
    path: "/admins/users.vue",
    component: _2ce170e6,
    name: "admins-users.vue"
  }, {
    path: "/password/change-password",
    component: _32df5872,
    name: "password-change-password"
  }, {
    path: "/password/email",
    component: _92c84714,
    name: "password-email"
  }, {
    path: "/password/reset",
    component: _9e4cc6ae,
    name: "password-reset"
  }, {
    path: "/admins/all-books/add-new-book",
    component: _152fc720,
    name: "admins-all-books-add-new-book"
  }, {
    path: "/admins/all-books/edit/:id",
    component: _37d52b9a,
    name: "admins-all-books-edit-id"
  }, {
    path: "/admins/book-requests/:id?",
    component: _043d60d6,
    name: "admins-book-requests-id"
  }, {
    path: "/admins/update-record/:id",
    component: _8d361074,
    name: "admins-update-record-id"
  }, {
    path: "/books/:id",
    component: _12eab1ba,
    name: "books-id"
  }, {
    path: "/",
    component: _21c44af4,
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
