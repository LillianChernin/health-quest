const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/health-quest');

const indexRoutes = require('./routes/index');
const consequenceRoutes = require('./routes/consequences');
const choiceRoutes = require('./routes/choices');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', indexRoutes);
app.use('/consequences', consequenceRoutes);
app.use('/choices', choiceRoutes);
