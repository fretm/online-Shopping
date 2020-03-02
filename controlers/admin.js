
const product = require('../model/admi')
const path = require('path')
exports.adminpage=((req,res,next)=>{
    const prodList = product.showproduct()
    res.render('index',{'prodList':prodList})
})

exports.adminaddpage=(((req,res,next)=>{
    res.render('addproduct')
}))


exports.admindata=((req,res,next)=>{
   
    const prod = new product(null,req.body.title,req.body.price,req.body.image,req.body.description)
    
    prod.addproduct()
    console.log(req.body)
    const prodList = product.showproduct()
    res.render('index',{'prodList':prodList})
})

exports.deleteItem=((req,res,next)=>{

    const id=req.body.id

    console.log(product.showproduct())
    console.log(id)

    product.deleteproduct(id)
 const prodList = product.showproduct()
    res.render('index',{'prodList':prodList})
})

