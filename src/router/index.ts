import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        redirect: { name: 'add' }
      },
      {
        path: '/add',
        name: 'add',
        component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Add.vue')
      },
      {
        path: '/done',
        name: 'done',
        component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Done.vue')
      },
      {
        path: '/delete',
        name: 'delete',
        component: () => import(/* webpackChunkName: "group-foo" */ '@/components/Delete.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
