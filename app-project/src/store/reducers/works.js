

export default function works(state={
    data:[],
    loading:false,
    loadEnd:false,
    page:1
},action){
    switch (action.type){
        case 'LOAD':
            return {
                ...state,
                loading:true
            };
        case 'LOADOVER':
            return {
                ...state,
                loading: true,
                page:++state.page,
                data:state.data.concat(action.data)
            };
        case 'LOADEND':
            return {
                ...state,
                loadEnd:true
            }
    }
    return state;
}