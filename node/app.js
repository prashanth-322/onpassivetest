const MongoClient = require('mongodb').MongoClient;
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
const port = 3000
 
// Connection URL
app.use(cors())
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(bodyParser.json({ limit: "50mb" }))
  app.use(express.urlencoded({limit: '100mb'}));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }) );
 
// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   client.close();
  
// });

MongoClient.connect('mongodb://127.0.0.1/myproject', function(err, database){
  if(err) throw err;
  console.log("Connection Established");
  db= database.db('myproject');
});

app.post('/register', function(req,res){
    console.log(req.body);
    db.collection('user').save({
        "username": req.body.username,
        "password" : req.body.password,
        "role" : req.body.role
    }, function(err,data){
        if(err){
            res.send(err);
        }
        else{
             res.json({"msg":"success", "code":"user created succesfull"})
        }
    })
})

app.post('/login', function(req,res){
    console.log("login API");
    console.log(req.body);
    db.collection('user').find({"username":req.body.username,"password":req.body.password}).toArray(function(err,data){
        console.log(data);
        if(data.length>0){
            res.send(data);
        }
        else{
            res.json({"msg":"wrong"});
        }
    })
})


module.exports = app;

