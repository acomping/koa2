const fs = require('fs')
const path = require('path')


function readFileFn(arg){
    return new Promise((resolve,reject)=>{
        let mypath = path.join(__dirname,`../assets/${arg}vue.txt`)
        fs.readFile(mypath,(err,data)=>{
            if(err) throw err;
            resolve(data.toString());
        })
    })
}

let vueText = readFileFn('vue');
let reactText = readFileFn('react');
let angularText = readFileFn('angular');















/*
 create table users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL COMMENT '账号',
    password VARCHAR(20) NOT NULL COMMENT '密码',
    token LONGTEXT NOT NULL COMMENT '令牌'
);
 */
    




// const db = require('./db')

// var arr = [
//     { id: 1, imgUrl: '/images/3dBanner1.png' },
//     { id: 2, imgUrl: '/images/3dBanner2.png' },
//     { id: 3, imgUrl: '/images/3dBanner3.png' },
//     { id: 4, imgUrl: '/images/3dBanner4.png' },
//     { id: 5, imgUrl: '/images/3dBanner5.png' },
//     { id: 6, imgUrl: '/images/3dBanner6.png' },
// ]

// //for循环插入到banner表
// arr.map(val => {
//     let sql = `insert into banner values (${val.id},'${val.imgUrl}')`
//     db.query(sql, (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     })
// })




// create table banner(
    //     id INT PRIMARY KEY AUTO_INCREMENT,
//     imgUrl VARCHAR(100) COMMENT '轮播图地址'
// );

// select * from banner;//查询

// DESCRIBE banner描述

// show tables;//查看表
//drop table banner//删除表

// create database zixun;//创建表

// delete from banner//删除

// UPDATE banner SET imgur1="banner 3.png" WHERE id=1;//修改
// update banner set imgurl=' /images/banner3.png ' where id=3;

// create tab1e subject (
//     id INT NOT NULL PRIMARY KEY,
//     icon VARCHAR(100) NOT NULL,
//     title vARCHAR(100)NOT NULL
// );
    