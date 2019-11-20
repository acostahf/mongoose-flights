var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ticketSchema = new Schema({
    seat: String,
    price: Number,


})

module.exports = mongoose.model('Ticket', ticketSchema);