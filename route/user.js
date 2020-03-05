const express = require('express')
const path = require('path')
const router = express.Router()
const userrouter = require('../controlers/user')

router.get('/user',userrouter.usercontroler)

router.post('/add-tocart',userrouter.addtocart)

module.exports=router;