var Flight = require('../models/flight')


module.exports = {
  index,
  new: newFlight,
  create,
  show
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
}

//flight has to match with the show flight.airline ect.
function show(req, res) {
  Flight.findById(req.params.id, function (err, flight){
       res.render('flights/show', {title: 'Flight Detail', flight});
});
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  let flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.send(err);
    
    res.redirect(`/flights`);
  });
}
  
  function newFlight(req, res) {
    Flight.findById(req.params.id, function (err, flight){
    res.render('flights/new', { title: 'Add Flight', flight });
  })
};

  