// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// *** routes *** //
var routes = require('./routes/index.js');
var petRoutes = require('./routes/petRoutes.js');
var vetRoutes = require('./routes/vetRoutes.js');
var vetVisits = require('./routes/vetVisitRoutes.js');
var ownerRoutes = require('./routes/ownerRoutes.js');


// *** express instance *** //
var app = express();

// *** static directory *** //
<<<<<<< HEAD
app.set('views', path.join(__dirname, 'views'));
=======

>>>>>>> a23354a3c7b7f4c794b2b01bf8aad27c87cf33cf


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/')));


// *** main routes *** //
<<<<<<< HEAD
// app.use('/', routes);
app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../client/partials/', 'index.html'));
});
=======
app.use('/', routes);
>>>>>>> a23354a3c7b7f4c794b2b01bf8aad27c87cf33cf
app.use('/api/pets', petRoutes);
app.use('/api/profile', ownerRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/vet_visits', vetVisits);



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


// *** error handlers *** //

// development error handler
// will print stacktrace
<<<<<<< HEAD
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
=======
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});
>>>>>>> upstream/master


module.exports = app;
