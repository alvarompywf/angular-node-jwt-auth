import express from 'express';
import * as path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

export default app;
