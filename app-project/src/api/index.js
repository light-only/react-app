
// 获取work数据
function getWorkData(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:200,
            data:{
                id:1,
                name:'测试数据',
                title:'这是数据来取吧',
                content:'这个不算，下一个再说吧',
                good:10,
                image_path:[{"id":"1","article_id":"22","path":"src/common/images/work1.jpg","sort":"1","create_time":"2018-05-23 18:20:27"},{"id":"2","article_id":"22","path":"\/Uploads\/article\/2018\/05\/23\/1d2f45aa6db9c0812e7fb6ca07832979.png"}]
            }
        })
    })
}

//验证是否已经登录接口
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

//验证是否已经登出接口
function getIsLogout(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:0,
            user:'',
            message:'退出登录'
        })
    })
}

//登录接口
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

//获取works数据
function getWorksData(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:200,
            data:[
                {
                    id:1,
                    title:'山水之间',
                    icon:'icon1.png',
                    message:'江南水墨画享誉全国，在水墨画中享有重要地位，其画风独特，山水花卷浑然天成，其中更以王维的画卷为首，山水画登峰造极，展示出宋清时期山水画的蓬勃发展',
                    good:'这是学生1的作品'
                },
                {
                    id:2,
                    title:'笔墨纵横',
                    icon:'icon2.png',
                    message:'诗歌发展的时间，从古至今，渊源流长，其不仅书写了各个时代的历史，更是历史长河的见证，描绘了整个历史的优美花卷',
                    good:'这是学生2的作品'
                }
            ]
        })
    })
}

function getMessageListData(){
    return new Promise((resolve,reject)=>{
        resolve({
            code:200,
            data:[
                {
                    id:1,
                    name:'张三'
                },
                {
                    id:2,
                    name:'李四'
                }
            ]
        })
    })
}

//获取good 数据
function getGoodData(){
    return new Promise((resolve,reject)=>{
        resolve({
           data:{
               code:0,
               message:'这是测试数据',
               goodid: 1111111,
               goodNub:10
           }
        })
    })
}
//设置good数据
function setGoodData(){
    return new Promise((resolve,reject)=>{
        resolve({
            data:{
                code:0,
                message:'设置good',
                goodid:2222222
            }
        })
    })
}

//取消good数据
function cancleGoodData(){
    return new Promise((resolve,reject)=>{
        resolve({
            data:{
                code:1,
                message:'取消good',
                goodid:33333
            }
        })
    })
}

//更新評論
function putMessageData(){
    return new Promise((resolve,reject)=>{
        resolve({
            data:{
                code:1,
                text:'这是数据，来取吧！'
            }
        })
    })
}

//获取lecturer数据

function getLecturerData(){
    return new Promise((resolve,reject)=>{
        resolve({
            data:{
                code:1,
                name:'Light'
            }
        })
    })
}

export {
    getWorkData,
    getIsLogin,
    getIsLogout,
    getLogin,
    getWorksData,
    getMessageListData,
    getGoodData,
    setGoodData,
    cancleGoodData,
    putMessageData,
    getLecturerData
}
