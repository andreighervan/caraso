'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the car'
  }
});

module.exports = mongoose.model('Cars', CarSchema);