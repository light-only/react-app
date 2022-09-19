
import isLogin from '../../store/action/isLogin'
import {connect} from "react-redux";
import logout from "../../store/action/logout";
import {Link, useLocation,useNavigate} from 'react-router-dom'

//创建history方法，可以获取上一级路由地址，实现返回上一级和下一级的操作
import history from "../utils/history";
import {useEffect, useState} from "react";


function Header(props){

    //路由跳转方法,react-router-dom v6中使用useNavigate的方式来实现路由跳转
    const navigate = useNavigate();
    const {user,changeShow} = props;
    const [isBtnShow,setBtnShow] = useState(false);
    //获取当前浏览器的url路径
    const path = useLocation();
    useEffect(()=>{
       props.dispatch(isLogin())
    },[]);
    function getUser(){
        if(path.pathname === '/login'){
            return ''
        }
        if(user){
            return (<span className="header-btn-right">
                <span
                    className="header-user"
                    onClick = {()=>{
                        setBtnShow(!isBtnShow);
                    }}
                >{user}</span>
                <span
                    className="header-logout-btn"
                    style={{
                        display:isBtnShow?"block":"none"
                    }}
                    onClick={()=>{
                        props.dispatch(logout());
                        navigate('/login')
                    }}
                >退出</span>
            </span>);
        }

        return <Link className="user" to="/login" />;
    }
    return (
        <>
            <header id="header">
                <nav className="menu">
                    {/* 返回按钮 */}
                    {path.pathname === "/login"?<a
                        className="header-btn-left iconfont icon-back"
                        onClick={()=>{
                            //返回上一级的操作
                            if(history.length>1){
                                navigate(history.location.pathname);
                            }else{
                                navigate('/');
                            }
                        }}
                    ></a>:<a
                        className="header-btn-left iconfont icon-hycaidan"
                        onClick={()=>{
                            changeShow()
                        }}
                    ></a>}
                </nav>
                <h1 className="logo">miaov.com</h1>
                {/*<Link className="user" to='/login'/>*/}
                {getUser()}
            </header>
        </>
    )
}

export default connect(state=>{
    return {user:state.getUser}
})(Header);