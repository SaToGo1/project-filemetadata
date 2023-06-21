var express = require('express');
var cors = require('cors');
require('dotenv').config()

const fileUpload = require('express-fileupload');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload())

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',  (req, res) => {
  file = req.files.upfile 
  res.json({
    name: file.name,
    type: file.mimetype,
    size: file.size
  })
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
