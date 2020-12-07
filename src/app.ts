import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).json({ name: 'John' });
});

app.post('/', function (req, res) {
  res.status(200).json({ name: req.body.name });
});

export { app };
