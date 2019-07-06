import flexbox from "./flexbox.vue";

flexbox.install = function(Vue){
    Vue.component(flexbox.name,flexbox)
}

export default flexbox;