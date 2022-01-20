import { RouteRecordRaw } from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld.vue')

const routes: RouteRecordRaw[] = [{ path: '/', component: HelloWorld }]

export default routes
