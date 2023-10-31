const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blog',{useNewUrlParser:true})
.then(()=>console.log("数据库连接成功"))
.catch(e=>{
    console.log('connection error',e.message);
})

const db=mongoose.connection
module.exports = db;