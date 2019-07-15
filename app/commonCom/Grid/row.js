export default {
    name : 'common-row',
    functional : true,
    props : {
        gutters : Boolean,
        tag : {
            type : String,
            default : "div"
        }
    },
    render(h,{ data,props,children }) {
        data.staticClass = `${data.staticClass || ''} row`
        data.class = {
            'no-gutters' : props.gutters
        }
        return h(props.tag,data,children)
    }
}