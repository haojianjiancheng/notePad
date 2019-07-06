import markdown from "./markDown";

markdown.install = function(Vue){
    Vue.component(markdown.name,markdown)
};

export default markdown;