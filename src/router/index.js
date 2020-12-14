import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda/index.vue'
import Mendaftar from '../views/Mendaftar/index.vue'
import NotFound from '../views/404/index.vue'



Vue.use(VueRouter)

const routes = [
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
