var express = require('express');
var cors = require('cors');
require('dotenv').config()

const fileUpload = require('express-fileupload');
// const multer = require('multer')
// const upload = multer() // { dest: 'uploads/' } if i need the file

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload())

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',  (req, res) => {
  console.log(req.files);
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
