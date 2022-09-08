import React from "react";
import routeList from "./route_list";
import {Routes,Route,useLocation} from 'react-router-dom'

function IndexRoute(){
    return (
            <Routes>
                {routeList.map((item,index)=>{
                    return <Route path={item.path} exact={item.exact} element={item.element} key={index}/>
                })}
            </Routes>


        /** v5中使用Switch和renderv6中使用Routes和element, render和element对应路由中的配置**/

    )
}


export default IndexRoute;
