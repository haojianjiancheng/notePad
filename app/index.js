import App from "./app.vue";
import Vue from 'vue';

import common from "./commonCom/index";

Vue.use(common);

new Vue ({
    el : "#app",
    components : { App },
    template : `<App/>`,
})