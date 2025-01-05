const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contact.js');
const path = require('path')
const errorController = require('./controllers/error.js');

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'/public')))

app.use('/admin',adminRoutes);

app.use(shopRoutes);
app.use(contactRoutes);

// catch all error url
app.use(errorController.get404)
app.listen(5000)