
import axios from 'axios';
import qs from 'qs'

const http = axios.create({
    baseURL:'/miaov',
    withCredentials:true,
    transformRequest:(data)=>{
        //qs对URL进行硬编码，就是把URL中的中文转化成可以识别的编码
        return qs.stringify(data);
    }
});

export default http;