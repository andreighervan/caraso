'use strict';

module.exports = function(app) {
  let carList = require('../controllers/carController');

  // carList Routes
  app.route('/cars')
    .get(carList.listAllCars)
    .post(carList.createACar);

  app.route('/cars/:carId')
    .get(carList.readACar)
    .put(carList.updateACar)
    .delete(carList.deleteACar);
};