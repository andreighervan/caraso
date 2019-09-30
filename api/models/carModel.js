'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Cars', CarSchema);