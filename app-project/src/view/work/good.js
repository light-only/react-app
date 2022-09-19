
import history from "../../common/utils/history";
import {getGood,setGood,cancelGood} from "../../store/action/good";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
function Good(props){
    let {goodNub,good,goodid,user,dispatch,id} =props;
    let point = {}
    let [goodCount,setGoodCount] = useState(parseInt(goodNub));
    useEffect(()=>{
        dispatch(getGood())
    },[user])
    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span
                className={"iconfont icon-tuijian1 " + (good?"good":"")}
                onTouchStart={(e)=>{
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y = touch.pageY;
                }}
                onTouchEnd={(e)=>{
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    if(Math.abs(nowPoint.x - point.x)<5
                        &&Math.abs(nowPoint.y - point.y)<5){
                        if(user){
                            if(good){
                                dispatch(cancelGood({
                                    id,
                                    goodid
                                })).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount - 1);
                                    }
                                });
                            } else {
                                dispatch(setGood(id)).then(res=>{
                                    if(res){
                                        setGoodCount(goodCount + 1);
                                    }
                                });
                            }
                        } else {
                            history.push("/login");
                        }
                    }
                }}
            ></span>
        </p>
    );
}

export  default  connect(state=>({...state.good,user:state.getUser}))(Good)