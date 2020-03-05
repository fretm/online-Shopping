const express =require('express');
const path= require('path')
const app = express();
const adminroutes = require('./route/admin')
const bodyParser = require('body-parser')
const userroute=require('./route/user')
const mongoconnect=require('./util/database').mongoConnect
app.set('view engine', 'ejs');

app.use('/image',express.static(path.join(__dirname,'public','images')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(adminroutes)

app.use(userroute)

mongoconnect(() => {
console.log("mongos connected ...")
app.listen(3000,function(){
    console.log("sever running ")
});
});



