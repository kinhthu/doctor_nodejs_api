const Sequelize = require('sequelize');
const { Postgres_config } = require('../config');

const db = new Sequelize(Postgres_config);
// db.authenticate()
// .then(() => console.log("Connect successful!"))
// .catch((err) => console.log("Connect failed! Error: ", err.message));

const Doctors = db.define('Doctor', {
  name: Sequelize.STRING,
});

const Service = db.define('Service', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
});

// db.sync()
// .then(() => console.log('Create models successful!'));

module.exports = {
  Doctors
}
