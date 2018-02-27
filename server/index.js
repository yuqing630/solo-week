var express = require('express');
var bodyParser = require('body-parser');



var app = express();

app.use(express.static(_dirname + '/../client/dist'));






app.listen(3000, function(){
  console.log('listening to port 3000')
})
