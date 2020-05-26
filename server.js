const express = require('express'); 
const app = express(); 
const path = require('path');
const cors = require("cors");

app.use(express.static(path.join(__dirname, 'media')))
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.sendSongs('/media', (req, res) => {
  // Get mongoDB collection of songs
  /**
   * {
   *   name: String,
   *   url: String
   * }
   */
  
}) 

// from front end make request to 'http://localhost:3000/heat.mp3'
app.get('/media/:soundFile', (req, res) => {
  res.sendFile( __dirname + `/media/${req.params.soundFile}` );
}) 

app.listen(3000, function () { // NEW
  console.log('App running on port 3000');
});