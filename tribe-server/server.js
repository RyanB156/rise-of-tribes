
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000

const Game = require('./src/game')
let game = new Game();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/asset/eventCard/:cardName', (req, res) => {
  let cardName = req.params['cardName'];
  if (cardName === undefined) {
    console.log('cardName was undefined');
    return res.status(404);
  }
  console.log(`/asset/eventCard/${cardName}`)
  return res.status(200).send(game.eventManager.getEventCardData(cardName));
})

app.get('/asset/tribeCard/:cardName', (req, res) => {
  let cardName = req.params['cardName'];
  if (cardName === undefined) {
    console.log('cardName was undefined');
    return res.status(404);
  }
  console.log(`/asset/tribeCard/${cardName}`)
  return res.status(200).send(game.getTribeCardData(cardName));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})