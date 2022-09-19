import {putMessageData} from "../../api";

export default function putMessage(){
    return function (dispatch){
        return putMessageData().then(res=>{
            if(res.data.code !==0){
                alert('添加成功')
            }
            return true;
        })
    }
}