const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('API Working!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.get('/search/:query?', function(req, res){
  var query = req.params.query;
  db.smembers(query, function(err, vals){
    if (err) return res.send(500);
    res.send(vals);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})