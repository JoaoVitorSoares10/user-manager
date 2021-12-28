const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const port = process.env.PORT || 8000;
const app = express();

mongoose.connect('mongodb://localhost:27017/user_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Database conected');
    }
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, ()=>{
    console.log("Server running on http://localhost:"+port);
})