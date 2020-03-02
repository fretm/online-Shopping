const express =require('express');
const path= require('path')
const app = express();
const adminroutes = require('./route/admin')
const bodyParser = require('body-parser')
const userroute=require('./route/user')

app.set('view engine', 'ejs');

app.use('/image',express.static(path.join(__dirname,'public','images')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(adminroutes)

app.use(userroute)
app.listen(3000 ,function(){
    console.log("server  running")
})

