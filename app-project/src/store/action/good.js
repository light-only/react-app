import {getGoodData,setGoodData,cancleGoodData} from "../../api";
function getGood(){
    return function (dispatch){
        return getGoodData().then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type:'GOOD',
                    goodid:res.data.goodid
                })
            }else{
                dispatch({
                    type:'CANCLE_GOOD'
                })
            }
        })
    }
}

function setGood(){
    return function (dispatch){
        return setGoodData().then(res=>{
           if(res.data.code === 0){
               dispatch(getGood());
               return true;
           }
        })
    }
}

function cancelGood(){
    return function (dispatch){
       return cancleGoodData().then(res=>{
            if(res.data.code === 0){
                dispatch({
                    type:'CANCLE_GOOD'
                });
                return true;
            }
        })
    }
}

export {getGood,setGood,cancelGood}