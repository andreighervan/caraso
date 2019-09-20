let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://andreighervan:123QQsuccess@ds017165.mlab.com:17165/caraso', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res)=>{
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

const routes = require('./api/routes/carRoutes'); //importing route
routes(app); 

app.listen(port);

console.log('Car Aso Marketplace RESTful API server started on: ' + port);