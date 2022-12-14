
import React from 'react'

import Index from '../view/home/index'
import Course from '../view/course/index'
import Work from '../view/work/index'
import Login from '../view/login/index'
import Lecturer from '../view/lecturer/index'
const routeList = [
    {
        name:'首页',
        path:'/home',
        exact:true,
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
        path:'/work/:id',
        exact:true,
        element:<Work/>
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

const nav = [
    {
        name:'首页',
        path:'/home',
        exact: true,
        element: <Index/>
    },
    {
        name:'课程安排',
        path:'/course',
        exact:true,
        element:<Course/>
    },
    {
        name:'学生作品',
        path:'/work',
        exact:true,
        element:<Work/>
    },
    {
        name:'讲师介绍',
        path:'lecturer',
        exact:true,
        element:<Lecturer/>
    }
]

export  {routeList,nav};