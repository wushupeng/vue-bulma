import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/home',
            name: 'home',
            components: {
                topBar:()=>import('@/components/TopBar'),
                sideBar:()=>import('@/components/SideNav'),
                bottomBar:()=>import('@/components/BottomBar'),
                body:()=>import('@/components/ContextCenter'),

            },
        },
        {
            path: '/topBar',
            name: 'topBar',
            component: () => import('@/components/TopBar'),
        }, {
            path: '/sideBar',
            name: 'sideBar',
            component: () => import('@/components/SideNav'),
        }, {
            path: '/bottomBar',
            name: 'bottomBar',
            component: () => import('@/components/BottomBar'),
        }, {
            path: '/body',
            name: 'body',
            component: () => import('@/components/ContextCenter'),
        }
    ],
    mode: "history"
});

export default router;