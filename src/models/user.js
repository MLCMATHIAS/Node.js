const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String, //de tipo string
    required: true,//es requerido
  },
  age: {
    type: Number,//tipo numero
    required: true//es requerido
  },
  email: {
    type: String,//tipo string
    required: true//es requerido

  }
});

module.exports = mongoose.model('User', userSchema);