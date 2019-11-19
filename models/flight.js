var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date,
},{
timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);