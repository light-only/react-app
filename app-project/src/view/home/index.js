import {connect} from 'react-redux';

function Home(props){
    return (
        <div style={{height:`100vh`,marginTop:'1.2rem'}}>
            <h1>首页</h1>
        </div>

    )
}

//connect是redux里面自带的，通过传入传入当前组件的方式来使用
export default connect(res=>{
    return res
})(Home);