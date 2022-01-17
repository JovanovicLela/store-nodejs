var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var app = express();
const port = 3000;
const mongoose = require("mongoose");
const username = "admin1";
const password = "Admin123";
const cluster = "cluster0.fqy6g";
const dbname = "myFirstDatabase";

mongoose.connect(
 
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const userRoutesUI = require('./routes/ui/users');
const userRoutesBackend = require('./routes/backend/users');

const supplierRoutesUI = require('./routes/ui/suppliers');
const supplierRoutesBackend = require('./routes/backend/supplier');

const shopRoutesUI = require('./routes/ui/shops');
const shopRoutesBackend = require('./routes/backend/shops');

const productRoutesUI = require('./routes/ui/products');
const productRoutesBackend = require('./routes/backend/products');

const couponRoutesUI = require('./routes/ui/coupons');
const couponRoutesBackend = require('./routes/backend/coupons');

const authBackend= require('./routes/auth/auth');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname) +'/index.html');
})
app.use(userRoutesUI);
app.use(userRoutesBackend);

app.use(supplierRoutesUI);
app.use(supplierRoutesBackend);

app.use(shopRoutesUI);
app.use(shopRoutesBackend);

app.use(productRoutesUI);
app.use(productRoutesBackend);

app.use(couponRoutesUI);
app.use(couponRoutesBackend);

app.use(authBackend);
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });