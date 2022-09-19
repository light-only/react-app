
import {connect} from "react-redux";
import "../../common/css/miiaov.css";
import Frame from "../../common/component/frame";
import getWork from "../../store/action/getWork";
import history from "../../common/utils/history";
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import Message from "./message";
import Skeletion from "../../common/component/skletion";
import Main from './main'
import getMessageList from "../../store/action/getMessageList";
function Work(props){
    let {data,loading,dispatch,user} = props;

    //获取url中的params
    let {id} = useParams();

    let [showMessage,setShow] = useState(false);

    function getMessageData(){
        return dispatch(getMessageList())
    }

    useEffect(()=>{
        dispatch(getWork());
        getMessageData();
        return ()=>{
            dispatch({
                type:'WORK_RESET'
            });
            dispatch({
                type:'MESSAGE_RESET'
            });
        }
    },[])
    return (
        <div>
            <Frame
                pullUp = {true}
                getData = {getMessageData}
            >
                {
                    loading?<Skeletion />:(<Main
                        data={data}
                    />)
                }
            </Frame>
            <footer
                className="miiapv_footer"
                onClick={()=>{
                    if(user){
                        setShow(true);
                    } else {
                        history.push("/login");
                    }
                }}
            >回复本帖</footer>
            <Message
                show = {showMessage}
                setShow = {setShow}
                id = {id}
            />
        </div>
    )
}

export default connect(state=>({...state.work,user:state.getUser}))(Work);