const Koa = require('koa');
const app = new Koa();
const router = require('./router')
const cors = require('koa2-cors')
const static = require('koa-static')
const path = require('path')
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
/* 
router.allowedMethods()允许任何请求
*/
app.use(static(path.join(__dirname+'/assets')))
app.use(cors());//后端允许跨域
app.use(router.routes(),router.allowedMethods())
app.listen(3000);

// insert into banner (imgUrl) values ('/images/sw2.png');