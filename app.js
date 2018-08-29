const express = require('express');
const app = express();
const mountRoutes = require('./routers');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.listen(3000, (err) => {
    console.log('Cannot start service! Error: ', err);
}, () => {
    console.log('Start service successful, please refer to http://localhost:3000');
});
mountRoutes(app);

module.exports = {
    app,
};