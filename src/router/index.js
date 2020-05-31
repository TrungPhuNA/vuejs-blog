import Vue from 'vue'
import Router from 'vue-router'

import HomePage from "./../pages/home/index";
import MenuPage from "./../pages/menu/_id";
import ArticlePage from "./../pages/article";
import ContactPage from "./../pages/contact";
import ArticleDetail from "./../pages/article/_id";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name : 'page.home',
            component: HomePage
        },
        {
            path: '/bai-viet.htm',
            name : 'page.article',
            component: ArticlePage
        },
        {
            path: '/lien-he.htm',
            name : 'page.contact',
            component: ContactPage
        },
        {
            path: '/bai-viet/:slug-:id(\\d+).htm',
            name : 'page.article.detail',
            component: ArticleDetail,
        },
        {
            path: '/danh-muc/:slug-:id(\\d+).htm',
            name :'page.menu.item',
            component: MenuPage
        },
        // {
        //     path: '/danh-muc',
        //     name : 'page.menu',
        //     children: [
        //         {
        //             path: ':slug-:id(\\d+).htm',
        //             name :'page.menu.item',
        //             component: MenuPage
        //         }
        //     ]
        // },
    ]
})