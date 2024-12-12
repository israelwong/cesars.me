require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./api/sendmail');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/sendmail', sendMail);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
