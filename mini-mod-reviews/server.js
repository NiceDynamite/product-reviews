require("dotenv").config();
const express = require('express');
const req = require('express/lib/request');
const app = express();
const cors = require('cors');
const db = require('./public/queries');
const port = process.env.PORT || 3005;

app.listen(port,function(){
    console.log(`Listing on port ${port}`);
});
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.get('/test', db.getReviews);
app.use((req,res) => {
res.status(404).send("Not Found");
});