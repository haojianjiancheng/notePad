import App from "./app.vue";
import Vue from 'vue';
import router from "./Router";
import store from "./Store";
import common from "./CommonCom/index";
import "./Style/Normalize.css";
import "./Style/style.less";

Vue.use(common);

new Vue ({
    el : "#app",
    router,
    store,
    components : { App },
    template : `<App/>`,
})