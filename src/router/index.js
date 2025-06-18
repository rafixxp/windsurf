import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/register.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue'),
    },
    {
        path: '/transaksi',
        name: 'transaksi',
        component: () => import('../views/transaksi/index.vue')
    },
    {
        path: '/run',
        name: 'run',
        component: () => import('../views/home/run.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('token')

    if(to.meta.requiresAuth && !isLogin){
        next({name: 'login'})
    }
    else{
        next()
    }
});

export default router;