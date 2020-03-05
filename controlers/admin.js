
const product = require('../model/admi')
const path = require('path')
exports.adminpage=((req,res,next)=>{


   product.showproduct().then(result =>{
    res.render('index',{'prodList':result})
   })
   .catch(err => console.log(err));
   
})

exports.adminaddpage=(((req,res,next)=>{
    res.render('addproduct')
}))


exports.admindata=((req,res,next)=>{
   
    const prod = new product(null,req.body.title,req.body.price,req.body.image,req.body.description)
    
    prod.addproduct()
    console.log(req.body)
    
    res.redirect('/admin')
})

exports.deleteItem=((req,res,next)=>{

    const id=req.body.id

    console.log(product.showproduct())
    console.log(id)

    product.deleteproduct(id)
 const prodList = product.showproduct()
    res.render('index',{'prodList':prodList})
})

exports.updateproduct=((req,res,next)=>{
   console.log(req.params.id)
//     let prod = product.findById( req.params.id);
// console.log(prod)
//     res.render('update_form',{prod:prod[0]})
})