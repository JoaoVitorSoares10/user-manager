const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('database conected');
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({mensage: "hello world"});
});

app.listen(port, ()=>{
    console.log("Server running on http://localhost:"+port);
})