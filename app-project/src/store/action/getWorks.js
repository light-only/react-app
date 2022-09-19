import {getWorksData} from "../../api";

export default function getWorks(){
    return function (dispatch,getState){
        dispatch({
            type:'LOAD'
        })
       return getWorksData().then(res=>{
            if(!res.data.length){
                dispatch({
                    type:'LOADEND',
                });
                return false;
            }
            dispatch({
                type:'LOADOVER',
                data:res.data
            });
            return true;
        })
    }
}