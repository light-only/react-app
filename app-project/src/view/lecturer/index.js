import {connect} from "react-redux";
import {useEffect, useState} from "react";
import getLecturer from "../../store/action/lecturer";
import Frame from "../../common/component/frame";
import LecturerTab from './tab'
import Join from "./join";
import LecturerAlert from "./lecturerAlert";
import Footer from "./footer";
import "../../common/css/teacher.css";

function Lecturer(props){
    let [show,setShow] = useState(false);
    let [alertDate,setAlertDate] = useState(null);
    let {data,dispatch} = props;
    let newData = [];

    function showAlert(data){
        setAlertDate(data);
        setShow(true);
    }
    function hideAlert(){
        setShow(false);
    }

    for(let i=0;i<data.length;i++){
        let newArr = [];
        let end = i +3;
        end = end >data.length?data.length:end;
        for(let j=i;j<data.end;j++){
            newArr.push(data[i]);
        }
        newData.push(newArr);
    }
    useEffect(()=>{
        dispatch(getLecturer());
    },[])
    return (
        <div>
            <Frame>
                <div className="teacher_banner">
                    <h2><span>妙味团队</span></h2>
                    <LecturerTab
                        data={data}
                        newData = {newData}
                        showAlert = {showAlert}
                    />
                </div>
                <Join />
                <Footer />
            </Frame>
            {show?<LecturerAlert
                data = {alertDate}
                hideAlert = {hideAlert}
            />:""}
        </div>
    );
}

export default connect(state=>state.lecturer)(Lecturer)