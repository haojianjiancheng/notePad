import markdown from "./markDown.vue";
import "./markDown.less";

markdown.install = function(Vue){
    Vue.component(markdown.name,markdown)
};

export default markdown;