
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    // app.use(createProxyMiddleware(
    //     '/miaov',{
    //     "target":"https://data.miaov.com/",
    //     'secure':true,
    //     "changeOrigin":true,
    //     "pathRewrite":{
    //         '^/miaov':""
    //     },
    //     'cookieDemainRewrite':"https://data.miaov.com/"
    // }
    // ))

}