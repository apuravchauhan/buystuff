const express = require('express');
const app = express();
var fs = require('fs');
var watch = require('node-watch');
var conf = JSON.parse(fs.readFileSync('config.json', 'utf8'));
watch('config.json', function (evt, filename) {
  console.log(filename, ' reload triggered.');
  conf = JSON.parse(fs.readFileSync('config.json', 'utf8'));
});
app.get('/data', (req, res) => {
  res.send(conf);
})
app.listen(3000, () => console.log('Buy Stuff server listening on port 3000!'))