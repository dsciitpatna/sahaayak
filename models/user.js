const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isVendor: {
    type: Boolean,
    required: true,
    default: false,
  },
  register_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('user', UserSchema);