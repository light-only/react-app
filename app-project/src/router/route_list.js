
import React from 'react'

import Index from '../view/home/index'
import Course from '../view/course/index'
import Works from '../view/works/index'
import Login from '../view/login/index'
import Lecturer from '../view/lecturer/index'
const routeList = [
    {
        name:'首页',
        path:'',
        exact:true,//是否精确匹配
        element:<Index/>
    },
    {
        name:'课程安排',
        path:'/course',
        exact:true,
        element:<Course/>
    },
    {
        name:'作品',
        path:'/works',
        exact:true,
        element:<Works/>
    },
    {
        name:'登录',
        path:'/login',
        exact:true,
        element:<Login/>
    },
    {
        name:'讲师',
        path:'lecturer',
        exact:true,
        element:<Lecturer/>
    }
]

export default routeList;