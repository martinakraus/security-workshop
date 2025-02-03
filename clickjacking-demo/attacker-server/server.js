const express = require("express");


const port = 4000;
const app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
  const view = fs.readFileSync('./templates/index.html', 'utf8');
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
