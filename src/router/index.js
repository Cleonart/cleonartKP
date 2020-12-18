import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda/index.vue'
import Mendaftar from '../views/Mendaftar/index.vue'
import NotFound from '../views/404/index.vue'
import Login from '../views/Login/index.vue'
import ConfirmEmail from '../views/Layanan/confirmEmail.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/confirm/email/:auth_code',
    name: 'ConfirmEmail',
    component: ConfirmEmail
  },

  // webiste clone
  {
    path: '/:id',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/:id/register',
    name: 'Mendaftar',
    component: Mendaftar
  },
  {
  	path: '/',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
