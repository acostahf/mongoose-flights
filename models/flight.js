var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var destinationSchema = new Schema({
    airport: String,
    arrival: Date,
},{
    timestamps: true
});


var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date,
    airport: String,
    destination: [destinationSchema],
},{
timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
