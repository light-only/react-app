import {connect} from 'react-redux';
import "../../common/css/index.css";
import getWork from "../../store/action/getWork";
import Frame from '../../common/component/frame';
import Course from './course'
import Vip from './vip'
import Miaov from './miaov'
import Work from './work'
import {useEffect} from "react";
import Tab from '../../common/component/tab'

let imgData = [
    require("../../common/images/tab/img1.png"),
    require("../../common/images/tab/img2.png"),
    require("../../common/images/tab/img3.png"),
    require("../../common/images/tab/img4.png")
];
function Home(props){

    let {dispatch} =props;

    function getWorksData(){
       return  dispatch(getWork())
    }

    //副作用狗子
    useEffect(()=>{
        getWorksData();
    },[])
    return (
        <Frame
            pullup = {true}
            getData ={getWorksData()}
        >
            <Tab
                data = {imgData}
                render = {(data)=>{
                    return <img src={data}/>
                }}
            />
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
                <Work {...props}/>
            </section>
        </Frame>


    )
}

//connect是redux里面自带的，通过传入传入当前组件的方式来使用
export default connect(props=>({...props.works}))(Home);