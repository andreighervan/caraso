'use strict';

const mongoose = require('mongoose'),
  Car = mongoose.model('Cars');

exports.listAllCars = (req, res)=>{
  Car.find({}, (err, car)=>{
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.createACar = (req, res)=>{
  const newCar = new Car(req.body);
  newCar.save((err, car)=>{
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.readACar = (req, res)=>{
  Car.findById(req.params.carId, (err, car)=>{
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.updateACar = (req, res)=>{
  Car.findOneAndUpdate({_id: req.params.carId}, req.body, {new: true}, (err, car)=>{
    if (err)
      res.send(err);
    res.json(car);
  });
};

exports.deleteACar = (req, res)=>{
  Car.remove({
    _id: req.params.carId
  }, (err, car)=>{
    if (err)
      res.send(err);
    res.json({ message: 'Car successfully deleted' });
  });
};
