//存放列表接口
const Router = require('koa-router');
const list = new Router()

//写对应的接口

list.get('/',async (ctx)=>{
    ctx.body = "列表"
})

list.get('/yinger',async (ctx)=>{
    ctx.body = "婴儿"
})
list.get('/wanju',async (ctx)=>{
    ctx.body = "玩具"
})

module.exports = list