import paper from "./Paper/index.js";
import button from "./Button/index.js";
import form from "./Form/index.js";
import input from "./Input/index.js";
import flexbox from "./FlexBox/index.js";
import markdown from "./MarkDown/index.js";
import editor from "./Editor/index.js"

const common = [
    paper,
    button,
    form,
    input,
    flexbox,
    markdown,
    editor
]

const install = function(Vue){
    common.forEach(item =>{
        Vue.component(item.name,item)
    })
}

export default install