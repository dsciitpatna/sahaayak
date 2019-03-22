const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const db = config.get('mongoURI');

// Connecting to database
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err))
//set mongoose's Promise equal to global Promise since mongoose's Promise version is depricated
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use routes

app.use('/api/login', require('./routes/api/login'));
app.use('/api/register', require('./routes/api/register'));

//error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));