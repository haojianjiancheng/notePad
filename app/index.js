import App from "./app.vue";
import Vue from 'vue';
import router from "./Router";

import common from "./commonCom/index";

Vue.use(common);

new Vue ({
    el : "#app",
    router,
    components : { App },
    template : `<App/>`,
})