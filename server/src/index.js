const express = require('express');
const app = express();
const router = require('./routes');
const bodyParser = require('body-parser');
const PORT = process.env.port || 3002;

app.use(express.static('./dist'));
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));