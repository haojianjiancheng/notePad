import VueRouter from "vue-router";
import Vue from "vue";
import store from "../Store";
import login from "../Page/login.vue";
import regin from "../Page/regin.vue";
import home from "../Page/home.vue";
import lostPage from "../Page/lostPage.vue";
import writer from "../Page/homeCom/writer.vue";
import setup from "../Page/homeCom/setup.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes : [
        {
            path : "/",
            name : "login",
            component : login
        },
        {
            path : "/regin",
            name : "regin",
            component : regin
        },
        {
            path : "/home",
            name : "home",
            redirect : "/home/writer",
            component : home,
            meta : {
                requireAuth : true
            },
            children : [
                {
                    path : "writer",
                    name : "writer",
                    component : writer,
                    meta : {
                        requireAuth : true
                    }
                },
                {
                    path : "setup",
                    name : "setup",
                    component : setup,
                    meta : {
                        requireAuth : true
                    }
                }
            ]
        },
        {
            path : "*",
            component : lostPage
        },
    ]
})

router.beforeEach((to,from,next)=>{
    const { name,meta } = to;
    const { login } = store.state;
    if(name === "login" || name === "regin"){
        next();
        return
    }
    if(meta.requireAuth){
        if(login){
            next();
            return
        }else{
            next("/");
            return
        }
    }
})

export default router