import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // {
        //     path: '/home',
        //     name: 'home',
        //     components: {
        //         topBar: () => import('@/components/TopBar'),
        //         sideBar: () => import('@/components/SideNav'),
        //         bottomBar: () => import('@/components/BottomBar'),
        //         body: () => import('@/components/ContextCenter'),

        //     },
        // },
        {
            path:'/home',
            name:'home',
            component: () => import('@/components/ContextCenter')
        },
        {
            path: '/topBar',
            name: 'topBar',
            component: () => import('@/components/TopBar'),
        }, 
        {
            path: '/sideBar',
            name: 'sideBar',
            component: () => import('@/components/SideNav'),
        }, 
        {
            path: '/bottomBar',
            name: 'bottomBar',
            component: () => import('@/components/BottomBar'),
        }, 
        {
            path: '/body',
            name: 'body',
            component: () => import('@/components/ContextCenter')
            
        },
        {
            path: '/menu1',
            name: 'menu1',
            component: () => import('@/components/menu1')
        },
        {
            path: '/menu2',
            name: 'menu2',
            component: () => import('@/components/menu2')
        },
        {
            path: '/menu3',
            name: 'menu3',
            component: () => import('@/components/menu3')
        }

    ],
    mode: "history"
});

export default router;