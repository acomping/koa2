//存放列表接口
const Router = require('koa-router');
const home = new Router()
const db = require('../utils/db')

//写对应的接口


home.get('/', async (ctx) => {
    ctx.body = "首页"
})
home.get('/banner', async (ctx) => {
    let mudata = await new Promise((resolve,reject)=>{
        return db.query(`select * from banner`,(err,data)=>{
            if(err) throw err;
            data.map(val=>{
                val.imgUrl = 'localhost:3000'+val.imgUrl
            })
            console.log(data);
            resolve(data)
        })
    })
    
    ctx.body = mudata
})
home.get('/nav', async (ctx) => {
    ctx.body = "导航"
})

module.exports = home