require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI || '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });

app.set('port', PORT || 3333);

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

app.listen(app.get("port"), () => {
    console.log(app.get('port') +'');
});

