export default {
    name : 'common-container',
    functional : true,
    render(h,{ data,children }){
        data.staticClass = `${data.staticClass || ''} container`;
        return h('div',data,children);
    }
}