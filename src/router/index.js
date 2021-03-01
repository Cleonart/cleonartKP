import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda/index.vue'
import Mendaftar from '../views/Mendaftar/index.vue'
import NotFound from '../views/404/index.vue'
import Login from '../views/Login/index.vue'
import ConfirmEmail from '../views/Layanan/confirmEmail.vue'
import Profile from '../views/Enterpriser/profile.vue'
import Dashboard from '../views/Enterpriser/dashboard.vue'
import Admin_Product from '../views/Admin/Product.vue'
import Admin_Packet_Product from '../views/Admin/ProductPacket.vue'

import EmailVerify from '../views/Layanan/send_email_confirm.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path : '/admin/product',
    name : 'Kelola Produk',
    component : Admin_Product
  },
  {
    path : '/admin/packet',
    name : 'Kelola Paket',
    component : Admin_Packet_Product
  },
  {
    path: '/admin/profil',
    name: 'Profil',
    component: Profile
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/confirm/email/send/:email_address',
    name: 'Send Email',
    component: EmailVerify
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
