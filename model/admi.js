

const getDb = require('../util/database').getDb;

let data = [{ title: 'forever 21',
price: '35$',
image: 'ghddhgdh',
description: 'size extar small' },
{ title: 'D&G',
price: '67$',
image: 'ghddhgdh',
description: 'size medium' },
{ title: 'Aldo',
price: '199$',
image: '5677',
description: 'extra large' }];


class Product {
  constructor(id,product, price, image, description) {
    this.id = id;
    this.product = product;
    this.price = price;
    this.image = image;
    this.description = description;
  }

  addproduct() {
      //  this.id= Math.random()*100
      //   data.push(this);
     
        const db = getDb()
        db.collection('products')
        .insertOne(this)
        .then(result => console.log(result))
        .catch(err => console.log(err));
      
          
  }
  static showproduct() {
   
     
      return  getDb().collection('products')
      .find().toArray()
      
   



   
  }
  static deleteproduct(id) {
      
   
    data= data.filter(item => item.id != id);
   
  }
  static findbyid(id){
    data =data.filter(item => item.id === id)
  }
  
  
}

module.exports = Product;
