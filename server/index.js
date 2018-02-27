const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')
const axios = require('axios')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/apiGet', function(req,res){
  // console.log(req.query)
  axios.get('https://api.darksky.net/forecast/7f8e68b7d22d958d5fa6cecdc9a2acc7/37.8267,-122.4233')
    .then((response)=>{
      res.send(response.data)
    }).catch((err)=>{
      console.log('cant get data from api')
    })

})






app.listen(3000, function(){
  console.log('listening to port 3000')
})
