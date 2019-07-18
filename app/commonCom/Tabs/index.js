import tabs from "./tabs.vue";

tabs.install = function(Vue){
    Vue.component(tabs.name,tabs)
}

export default tabs;