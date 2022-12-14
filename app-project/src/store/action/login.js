import {getLogin} from "../../api";

export default  function login(){
    return function (dispatch){
       return getLogin().then(res=>{
            if(res.code === 0){
                dispatch({
                    type:'LOGIN',
                    user:res.data.username
                })
            }
            return res.data;
        })
    }
}