export default {
    name : "common-markdown",
    data(){
        return {
            
        }
    },
    methods : {
        createBr(h){
            return h("p",{},[
                h("br")
            ])
        },
        all (){
            
        }
    },
    render(h){
        let content = h("div",{
            staticClass : "content",
            attrs : {
                contenteditable : true
            },
            on : {
                keyup : (e)=>{
                    if(e.target.children.length === 0){
                        document.execCommand("formatBlock",false,"P")
                    }
                }
            }
        },[this.createBr(h)])
        return h("div",{
            staticClass : "edit",
        },[content])
    }
}