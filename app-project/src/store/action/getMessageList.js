import {getMessageListData} from "../../api";


export default  function getMessageList(){
    return function (dispatch){
        dispatch({
            type:'MESSAGE_LOAD'
        })
        return getMessageListData().then(res=>{
            if(!res.data.length){
                dispatch({
                    type:'MESSAGE_LOADEND'
                });
                return false;
            }
            dispatch({
                type:'MESSAGE_LOADOVER',
                messageList:res.data
            });
            return true;
        })
    }
}