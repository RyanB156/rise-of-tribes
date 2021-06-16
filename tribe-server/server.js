
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();
app.use(cors());
app.use(bodyParser());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})