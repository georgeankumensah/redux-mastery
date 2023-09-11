const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PostRoutes = require('./Routes/posts.js');


const app = express();

app.use(cors());
app.use('/posts', PostRoutes);


app.use(bodyParser.json({limit: '50mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}));


const CONNECTION_URL = 'mongodb+srv://georgeankumensah:menzah@cluster0.bgrgd7b.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Database Connected \nServer running on port: ${PORT}`)))
    .catch((error) => console.log(`🚩🚩 Error running server  \n${error.message}`));