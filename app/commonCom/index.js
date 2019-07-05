import paper from "./Paper/index.js";

const common = [
    paper
]

const install = function(Vue){
    common.forEach(item =>{
        Vue.component(item.name,item)
    })
}

export default install