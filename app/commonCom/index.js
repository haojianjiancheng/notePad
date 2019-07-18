import paper from "./Paper/index.js";
import form from "./Form/index.js";
import input from "./Input/index.js";
import flexbox from "./FlexBox/index.js";
import menu from "./Menu/index.js";
import grid from "./Grid/index.js";
import floatButton from "./FloatButton/index.js";
import columnButton from "./ColumnButton/index.js";
import tabs from "./Tabs/index.js";

const common = {  
    paper,
    form,
    input,
    flexbox,
    menu,
    grid,
    floatButton,
    columnButton,
    tabs
}

const install = function(Vue){
    Object.keys(common).forEach(item =>{
        Vue.use(common[item])
    })
}

export default install