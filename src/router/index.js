import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 导入布局组件
import Layout from '../layout';

export default new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/pages/home/index'),
                    meta: { title: '首页', icon: 'home' }
                }
            ]
        },
        {
            path: '/app',
            name: 'app',
            component: Layout,
            meta: { title: '应用管理', icon: 'app' },
            children: [
                {
                    path: 'list',
                    name: 'list',
                    component: () => import('@/pages/app/list/index'),
                    meta: { title: '应用列表', icon: 'list' }
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: () => import('@/pages/app/detail/index'),
                    meta: { title: '应用详情', icon: 'detail' }
                }
            ]
        }
    ]
})