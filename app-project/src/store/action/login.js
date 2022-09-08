import HTTP from './http'
export default function login(data){
    if(data.username === 'admin' && data.password === '123456') {
        return {
            type: 'LOGIN',
            data:{
                code:200,
                message:'登录成功'
            }
        }
    }

}