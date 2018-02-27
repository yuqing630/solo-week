const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')


const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/apiGet', function(req,res){
  console.log('server connected')
})






app.listen(3000, function(){
  console.log('listening to port 3000')
})
