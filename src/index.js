import './config/database.config';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, function() {
  console.log(`Server running at port ${PORT}!`);
});
