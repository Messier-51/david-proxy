const express = require ('express');

const app = express();
const path = require('path');
const port = 1234;

app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, () => console.log(`serving on port ${port}`));
