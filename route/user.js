const express = require('express')
const path = require('path')
const router = express.Router()
const userrouter = require('../controlers/user')

router.get('/user',userrouter.usercontroler)


module.exports=router;