var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();


const bearerToken = require('express-bearer-token');
app.use(bearerToken());

var env = process.env.NODE_ENV || 'development';
var config = require('./app/config/config.json')[env];
var models = require('./app/models')

var breedRouter = require('./app/router/breed.router')(models.Breed);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/api/breeds', breedRouter);


models.sequelize.sync().then(function() {

    app.listen(config.httpPort, function(err){
        if(err) throw err;
        if(env !=='test'){
            console.log("Application listening on port "+ config.httpPort);
        }

    });
    app.on('error', onError);
    app.on('listening', onListening);

}).catch(function(error){
    console.log(error);
});

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}


module.exports = app;
