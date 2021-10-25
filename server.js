const express = require('express');
const bodyParser= require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://kamil:123@zadanie.7lxeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
let db;
let quotesCollection;



MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db('zadanie')
    quotesCollection = db.collection('quotes')
  })
  .catch(console.error)

app.use(express.static('public'))
  
 app.set('view engine', 'ejs')

  app.get('/', (req, res) => {
    
    db.collection('quotes').find().toArray()
      .then(results => {
        
        res.render('index.ejs', {quotes: results})
      })
      .catch(error => console.error(error))
    // ...
  })

  app.use(bodyParser.urlencoded({ extended: true }))
  
 
  app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
        console.log(result)
        
      })
      .catch(error => console.error(error))
  })

  
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
  