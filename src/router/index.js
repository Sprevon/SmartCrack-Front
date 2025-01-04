// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 定义路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue') // 懒加载组件
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/Login.vue') // 懒加载组件
    }
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 的历史模式
    routes
})

export default router
