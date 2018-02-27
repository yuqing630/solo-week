const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database')


const app = express();

app.use(express.static(_dirname + '/../client/dist'));






app.listen(3000, function(){
  console.log('listening to port 3000')
})
