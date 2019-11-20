var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
    Ticket.find({}, function(err, ticket) {
    res.render('tickets/new', { title: 'whatever', flightId: req.params.id, ticket });
})
};

function create(req, res) {
  flightId =req.params.id;
  req.body.flight = flightId;
  Ticket.create(req.body, function(err, ticket) {
      if(err) res.send(err)
  res.redirect(`/flights/${flightId}`);
});
};

