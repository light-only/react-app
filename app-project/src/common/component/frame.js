import Header from "./header";
import Menu from "./menu";
import '../css/reset.css';
import '../css/common.css';
function Frame(props){
    console.log(props);
    return (
        <>
            <Menu/>
            <div id="main">
                {props.children}
            </div>

        </>
    )
}

export default Frame;