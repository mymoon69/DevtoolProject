import {createRouter, createWebHistory} from 'vue-router'


import registerView from '../components/RegisterView.vue'
import loginView from '../components/LoginView.vue'
import CommentPage from '@/screen/CommentPage.vue'
// import Home from '@/components/Home.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/register',
            component : registerView
        },
        {
            path : '/login',
            component : loginView
        },
        {
            path : '/comment',
            component : CommentPage
        },
        // {
        //     path : '/home',
        //     component : Home
        // }
    ]
})

export default router;