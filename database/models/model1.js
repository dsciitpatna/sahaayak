const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// example
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    }
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;