import {createRouter, createWebHistory} from 'vue-router'
import Signup from "@/Views/Signup";
import Home from "@/Views/Home";
import LogIn from "@/Views/LogIn";
import auth from "../auth";
import SinglePost from "@/Views/SinglePost";

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if(!authResult){
            next("/login");
        }else{
            next();
        }
    }
},
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    { path: '/contactus',
        name: 'contactus',
        component: () =>
            import("../Views/ContactUs.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: LogIn
    },
    {
      path: "/api/apost/:id",
      name: "SinglePost",
      component: SinglePost,
        beforeEnter: async (to, from, next) => {
            let authResult = await auth.authenticated();
            if(!authResult){
                next("/login");
            }else{
                next();
            }
        }

    },
    {
        path:'/addpost',
        name:'addpost',
        component: () =>
            import("../Views/AddPost"),
        beforeEnter: async (to, from, next) => {
            let authResult = await auth.authenticated();
            if(!authResult){
                next("/login");
            }else{
                next();
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router