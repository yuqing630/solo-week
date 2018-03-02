const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')
const axios = require('axios')
const config = require('../config.js')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/apiZip',function(req,res){
  // console.log(req.query.zipcode)
  let zipUrl = 'https://www.zipcodeapi.com/rest';
  let zipApiKey = config.zipApiKey;
  let zipCode = req.query.zipcode;
  let zipApiUrl = zipUrl + '/' + zipApiKey + '/info.json/' + zipCode + '/degrees';
  // console.log(zipApiUrl)

  axios.get(zipApiUrl)
  .then((response)=>{
    // console.log(response)
    let lat = response.data.lat;
    let lon = response.data.lng;

    let weatherUrl = 'https://api.darksky.net/forecast';
    let weatherApiKey = config.weatherApiKey;
    let weatherApiUrl = weatherUrl + '/' + weatherApiKey + '/' + lat + ',' + lon;
    axios.get(weatherApiUrl)
    .then((response2)=>{
      res.send(response2.data)
    })
  })
})

app.get('/apiGet', function(req,res){
  console.log(req.query)
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
