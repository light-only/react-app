import {getIsLogout} from "../../api";

export default function loginOut(){
    return function (dispatch){
       return getIsLogout().then(res=>{
            if(res.code === 0){
                dispatch({
                    type:'LOGOUT'
                })
            }
        })
    }
}