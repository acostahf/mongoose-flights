var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ticketSchema = new Schema({
    seat: {type: String, match: /[A-f][1-9]\d?/},
    price: {type: Number, default: 0},
    flight: {type: Schema.Types.ObjectId, ref: 'Flights'}
})

module.exports = mongoose.model('Ticket', ticketSchema);