const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var {sequelize,nomor} = require('./models')

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

app.get('/api/antrian', function(req, res){
    nomor.findAll({raw:true})
    .then(function(data){
        res.json(data)
    })
})

app.get('/api/nomor', function(req, res){
    nomor.findAll({order: [['id','DESC']], limit: 1} )
    .then(function(nomor){
        res.json(nomor)    
    });
    
})

app.post('/api/antrian', function(req, res){
    nomor.create({
        name: req.body.name,
        lastname: req.body.lname,
    })
    .then(function(){
        res.json({success: 1})
    })
    .catch(function(){
        res.json({success: 0})
    })
})