import {getWorkData} from "../../api";

export default function getWork(){
    return function (dispatch){
       return getWorkData().then(res=>{
            dispatch({
                type:'WORK_LOADOVER',
                data:res.data
            })
        })
    }
}