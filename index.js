require('dotenv').config;
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening @ port: ${ port }`));