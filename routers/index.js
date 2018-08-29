const doctors = require('./doctors');

module.exports = (app) => {
    app.use('/doctors', doctors);
};
