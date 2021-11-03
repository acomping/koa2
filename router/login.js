//存放列表接口
const Router = require('koa-router');
const login = new Router()
const bodyparser = require('koa-bodyparser')
const db = require('../utils/db')
const jwt = require('jsonwebtoken')

//写对应的接口
login.use(bodyparser())//前端数据
login.post('/register', async (ctx) => {
    // console.log(ctx.request.body);
    let myusername = ctx.request.body.username
    let mypassword = ctx.request.body.password

    let searchSql = `select * from users where username='${myusername}'`;
    let myarr = await new Promise((resolve, reject) => {
        return db.query(searchSql, (err, data) => {
            if (err) throw err;
            // console.log(data);
            resolve(data)
        })
    })

    if (myarr.length > 0) {
        if(myarr[0].password == mypassword){
            ctx.body = {
                msg:"登录成功",
                token:myarr[0].token,
                username:myusername
            }
        }else{
            ctx.body = {
                msg:"账号或密码不正确"
            }
        }
    } else {
        let mytoken = jwt.sign({ myusername: myusername, mypassword: mypassword }, 'secret', { expiresIn: 3600 })
        let insertSql = `insert into users (username, password, token) values ('${myusername}','${mypassword}','${mytoken}')`
        let result = await new Promise((resolve,reject)=>{
            return db.query(insertSql, (err, data) => {
                if (err) throw err;
                let obj = {
                    msg: "注册成功",
                    token: mytoken,
                    username: myusername
                }
                resolve(obj)
            })
        })
        ctx.body = result
    }
})


module.exports = login