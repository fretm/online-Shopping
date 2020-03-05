const express = require('express')
const router = express.Router()
const path=require('path')
const admincontroller = require('../controlers/admin')



router.get('/admin',admincontroller.adminpage)

router.get('/admin/add-product',admincontroller.adminaddpage)

router.post('/admin/add-product',admincontroller.admindata)

router.post('/admin/delete',admincontroller.deleteItem)

router.get('/admin/update',admincontroller.updateproduct )

module.exports = router;
