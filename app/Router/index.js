import VueRouter from "vue-router";
import Vue from "vue";
import login from "../Page/login.vue";
import regin from "../Page/regin.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        {
            path : "/",
            component : login
        },
        {
            path : "/regin",
            component : regin
        }
    ]
})