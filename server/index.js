const express = require ('express');

const app = express();
const path = require('path');
const port = 3006;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/songs/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.listen(port, () => console.log(`serving on port ${port}!`));