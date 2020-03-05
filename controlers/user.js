

const product = require('../model/admi')
const cart = require('../model/user')
exports.usercontroler =(req,res,next)=>{
    const prodList = product.showproduct()
    res.render('shope',{'prodList':prodList})
}

exports.addtocart = (req,res,next)=>{

const data = req.body;
   result =cart.save(data)
  res.send(`<h1>cart added (no of count )</h1>`)
}
