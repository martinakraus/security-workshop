const express = require("express");
const session = require('express-session');
const fs = require('fs');
var xFrameOptions = require('x-frame-options')


const port = 3000;
const app = express();

let reviews = [];

app.use(express.static('public'));

//app.use(xFrameOptions('Deny'))
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false
  }
}));

app.get('/', function (req, res) {
  if (req.query.newReview) reviews.push(req.query.newReview);
  const formattedReviews = reviews.map((review)=> `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/index.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.get('/downloads', function(req, res){
  // res.setHeader('Content-Disposition', 'attachment; filename=index.html');
  const view = fs.readFileSync('./downloads/attacker.html', 'utf8');
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
