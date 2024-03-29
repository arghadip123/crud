import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes/route.js'

const app= express();

app.use(bodyParser.json({ extended : true , }));
app.use(bodyParser.urlencoded({ extended : true , }));
app.use(cors());
app.use('/', Routes);

const PORT=8000;
Connection();

app.listen(PORT,() => console.log(`server is running succesfully on ${PORT}`));