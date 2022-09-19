import {getLecturerData} from "../../api";

export default  function getLecturer(){
    return function (dispatch){
        return getLecturerData().then(res=>{
            dispatch({
                type:'LOAD_LECTURER',
                data:res.data
            })
        })
    }
}