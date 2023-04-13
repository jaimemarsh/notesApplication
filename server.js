//express
const express = require('express');
//routes
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');

//process.env is for Heroku development
const PORT = process.env.PORT || 3001;

//app 
const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//css
app.use(express.static('Develop/public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

//server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
