const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/key').mongoURI;

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

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('connected');
})

//error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

const PORT = process.env.port || 3001;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));