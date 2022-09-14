import {getIsLogin} from "../../api";

export default  function isLogin(){
    return function (dispatch){
       return getIsLogin().then(res=>{
            if(res.code === 1){
                dispatch({
                    type:'LOGIN',
                    user:res.data.username
                })
            }
        })
    }
}