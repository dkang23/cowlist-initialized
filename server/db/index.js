var mongoose = require('mongoose');
var mongodb = 'mongodb://localhost/cowslist';
//const util = require('util');
mongoose.connect(mongodb);

var cowsSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
});

var Cows = mongoose.model('cows', cowsSchema);

var getAll = () => {
  return Cows.find().exec();
};

var create = ({ name, description }) => {
  return Cows.findOneAndUpdate(
    {
      name,
    },
    {
      name,
      description,
    },
    {
      new: true,
      upsert: true,
    }
  ).exec();
};

//var createAsync = util.promisify(create);

module.exports = { create, getAll };

//module.exports = { Cows };
