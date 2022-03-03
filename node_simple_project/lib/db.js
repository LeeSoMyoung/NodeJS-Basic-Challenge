'use strict';

require('dotenv').config();

const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    user: process.env.USER
});

db.connect((err)=>{
    if(err){
        // 에러가 존재한다면 
        console.log(err);
    }
    else{
        console.log('MySQL connected...');
    }
});