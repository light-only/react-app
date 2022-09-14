
function getWorkData(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:200,
            data:[
                {
                    id:1,
                    name:"第一条数据"
                },
                {
                    id:2,
                    name:'第二条数据'
                }
            ]
        })
    })
}

function getIsLogin(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:1,
            data:{
                username:'light'
            }
        })
    })
}

function getIsLogout(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:0,
            user:'',
            message:'退出登录'
        })
    })
}


function getLogin(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:0,
            data:{
                username:'light',
                message:'登录成功'
            }
        })
    })
}


export {
    getWorkData,
    getIsLogin,
    getIsLogout,
    getLogin
}
