

const product = require('../model/admi')

exports.usercontroler =(req,res,next)=>{
    const prodList = product.showproduct()
    res.render('shope',{'prodList':prodList})
}