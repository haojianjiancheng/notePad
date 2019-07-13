import editor from "./editor.vue";

editor.install = function(Vue,options){
    Vue.component(editor.name,editor)
}

export default editor;