const express = require('express');
const apiRoute = require('./routes/apiRoutes');
const htmlRoute = require('./routes/htmlRoutes');


//app and port
const app = express();
//server is shared between multiple applications, 3001 is most likely already taken on Heroku. Need Port to be set like this so it works locally and on Heroku
const PORT = process.env.PORT || 3001;

//body parsing, static, route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

//server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
