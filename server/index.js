const express = require('express');
const cors = require('cors')
const app = express();
const apiPort = 3000;
const db=require('./db');
app.use(express.urlencoded({extends:true}));
app.use(cors());
app.use(express.json());

db.on('error',console.error.bind(console,'MondoDB connection error'));
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(apiPort,()=>console.log(`Server running on port ${apiPort}`));