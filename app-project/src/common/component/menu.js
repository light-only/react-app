import React from 'react';
import {NavLink} from "react-router-dom";
import {nav} from "../../router/route_list";
export default function Menu(porps){
    return (
        <nav id="menu" style={{height:"100vh"}}>
            {nav.map((item,index)=>{
                return (<NavLink
                    className={item.className}
                    to={item.path}
                    key={index}
                    onTouchEnd={porps.menuHide}
                >{item.name}</NavLink>)
            })}
        </nav>
    );
} 