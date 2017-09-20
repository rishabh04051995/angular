let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
let api =require('./routes/route');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use("/api",api);
app.listen(3000);

module.exports =app;