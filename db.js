const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
.then(client=>{
    console.log("connected....");
    const db = client.db('testdb')
    db.collection('testcol').find().forEach(function(){
        if(err) throw err;
        console.log(Document)
       // client.close();
    })
})
.catch(err=>console.log("errr",err));