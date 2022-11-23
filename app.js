const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 경로 설정
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/outback', function (req, res) {
  res.render('outback');
});
app.get('/espoir', function (req, res) {
  res.render('espoir');
});
app.get('/ucafe', function (req, res) {
  res.render('ucafe');
});
app.get('/h_go', function (req, res) {
  res.render('h_go');
});

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`);
});