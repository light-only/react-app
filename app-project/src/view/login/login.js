import {useState} from "react";
import {connect} from 'react-redux';
import login from "../../store/action/login";
import store from "../../store";
import {useNavigate} from "react-router-dom";

function LoginPage (props) {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    const {setDeg} = props;
    const navigate = useNavigate();
    //点击登录
    function toLogin (){
        props.dispatch(login()).then(res=>{
            navigate('/home')
        })
    }

    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="images/user_img.png" alt=""/>
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input type="text"
                           value={username}
                           placeholder="用户名"
                           onChange={e=>setUsername(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        value={password}
                        placeholder="请输入密码"
                        onChange={e =>setPassword(e.target.value)}
                    />
                </p>
                <p className="mima clearfix">
                            <span>
                                <input id="rem" type="checkbox" name="remember"/>
                                <label htmlFor="rem"></label>记住密码
                            </span>
                    <a href="#">忘记密码？</a>
                </p>
                <button className="form_btn" onClick={()=>toLogin()}>登录</button>
                <p className="form_tip">没有帐号？<a href="#" onClick={()=>setDeg(-180)}>立即注册</a></p>
            </div>
        </div>
    )
}

export default connect(res=>{
    return res;
})(LoginPage)




