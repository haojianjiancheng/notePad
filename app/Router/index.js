import VueRouter from "vue-router";
import Vue from "vue";
import store from "../Store";
import login from "../Page/login.vue";
import regin from "../Page/regin.vue";
import home from "../Page/home.vue";

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
            component : home,
            meta : {
                requireAuth : true
            }
        }
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