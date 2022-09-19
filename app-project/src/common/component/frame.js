
import {useInnerHeight} from "../hook/index";
import '../css/reset.css';
import '../css/common.css';
// eslint-disable-next-line react-hooks/rules-of-hooks
let innerH = useInnerHeight();
function Frame(props){
    return (
        <>
            <div
                id="main"
                style={{
                    height: innerH
                }}
            >
                    <div>
                        {props.children}
                    </div>
            </div>

        </>
    )
}

export default Frame;