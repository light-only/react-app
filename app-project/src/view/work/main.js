import Good from "./good";
import Article from "./article";
import Tab from "../../common/component/tab";
import MessageList from './messageList'
export default function Main(props){
    console.log(props,'*****')
    let {data} = props;
    return (
        <div className="workDetails">
            <Tab
                data={data.image_path.map(item=>item.path)}
                render={src=><img src={src} />}
            />
            <div className="miiaov_box">
                <Article
                    data = {data}
                />
                <article className="miiaov_comment">
                    <Good
                        goodNub={data.good}
                        id= {data.id}
                    />
                    <MessageList />
                </article>
            </div>
        </div>
    )
}