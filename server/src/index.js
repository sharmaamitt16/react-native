require('./model/User');
require('./model/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

dotenv.config();

const mongoUri = process.env.MONGO_CONNECTION;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo');
});
mongoose.connection.on('error', () => {
  console.log('Error in connection to mongo');
});

app.get('/', requireAuth,  (req, res) => {
  res.send(` Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
