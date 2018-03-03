const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js')
const axios = require('axios')
const config = require('../config.js')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.get('/apiZip', function(req,res){
  let zipUrl = 'https://www.zipcodeapi.com/rest';
  let zipApiKey = config.zipApiKey;
  let zipCode = req.query.zipcode;
  let zipApiUrl = zipUrl + '/' + zipApiKey + '/info.json/' + zipCode + '/degrees';

  axios.get(zipApiUrl)
  .then((response)=>{
    let lat = response.data.lat;
    let lon = response.data.lng;

    let weatherUrl = 'https://api.darksky.net/forecast';
    let weatherApiKey = config.weatherApiKey;
    let weatherApiUrl = weatherUrl + '/' + weatherApiKey + '/' + lat + ',' + lon;
    // console.log(weatherApiUrl)
    axios.get(weatherApiUrl)
    .then((response2)=>{
      res.send(response2.data)
    })
  })
})

app.get('/apiGet', function(req,res){
  let newAddress = req.query.location.split(' ').join('+') + '&key='
  // console.log(newAddress)
  let geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  let geoApiKey = config.googleApiKey
  let googleUrl = geoUrl + newAddress + geoApiKey

  axios.get(googleUrl)
  .then((response)=>{
    let lat = response.data.results[0].geometry.location.lat
    let lon = response.data.results[0].geometry.location.lng
    let weatherUrl = 'https://api.darksky.net/forecast';
    let weatherApiKey = config.weatherApiKey;
    let weatherApiUrl = weatherUrl + '/' + weatherApiKey + '/' + lat + ',' + lon;
    // console.log(weatherApiUrl)
    axios.get(weatherApiUrl)
    .then((response2)=>{
      res.send(response2.data)
    })
  })
})

app.post('/add', function(req,res){
  // console.log(req.body.data)
  // console.log('lat', req.body.data.latitude, 'lon', req.body.data.longitude, 'currently', req.body.data.currently.temperature, 'hourly', req.body.data.hourly.summary, 'daily', req.body.data.daily.summary)
  let info = req.body.data
  let qStr = `INSERT INTO favorite (latitude, longitude) VALUES ("${info.latitude}", "${info.longitude}");`
  db.query(qStr, (err, data) =>{
    console.log('save in to db')
    res.end()
  }
  )
})

app.get('/getFav', function(req,res){
  // console.log('server')
  db.query("SELECT * FROM favorite;", (err, results)=>{
    if(err){
      console.log("failed to get from database")
    }

    let lat = results[0].latitude
    let lon = results[0].longitude
    let weatherUrl = 'https://api.darksky.net/forecast';
    let weatherApiKey = config.weatherApiKey;
    let weatherApiUrl = weatherUrl + '/' + weatherApiKey + '/' + lat + ',' + lon;
    // console.log(typeof(weatherApiUrl))
    // console.log(lon , lat)
    axios.get(weatherApiUrl)
      .then((response)=>{
        // console.log('in here now')
        // console.log(response)
        res.send(response.data)
    }).catch((err)=>{
        // console.log(weatherApiUrl)
        console.log(err)
        console.log('err getting from api')
    })
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`listening to port ${port}`)
})
