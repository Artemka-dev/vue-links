import Vue from 'vue'
import VueRouter from 'vue-router'

import firebase from "firebase/app"

Vue.use(VueRouter)

const routes = [
    {
        path: "/create-link",
        component: () => import("../views/CreateLink"),
        meta: {auth: true, title: "Создать ссылку"}
    },
    {
        path: "/",
        component: () => import("../views/AllLinks"),
        meta: {auth: true, title: "Все ссылки"}
    },
    {
        path: "/link/:slug",
        component: () => import("../views/DetailLink"),
        meta: {auth: true, title: "Ссылка"}
    },
    {
        path: "/login",
        component: () => import("../views/Login"),
        meta: {layout: 'empty', title: "Вход"}
    },
    {
        path: "/registration",
        component: () => import("../views/Register"),
        meta: {layout: 'empty', title: "Регистрация"}
    },
    {
        path: "*",
        component: () => import("../views/PageNotFound.vue"),
        meta: {auth: true, title: "Страница не найдена"}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // to куда мы идем,
    // from откуда мы пришли
    // next если хотим продолжить дальше
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(element => element.meta.auth)

    if (requireAuth && !currentUser) {
        next("/login")
        M.toast({html: "Войдите в систему"})
    } else {
        next()
    }
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
        next()
    } 


})



export default router
