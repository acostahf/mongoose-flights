var Flight = require('../models/flight');

module.exports = {
 create
};

//this is how you add destinations
function create(req, res) {
 Flight.findById(req.params.id, function(err, flight) {
   flight.destination.push(req.body);
   flight.save(function(err) {
     res.redirect(`/flights/${flight._id}`);
   });
 });
}