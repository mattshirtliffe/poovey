var should = require('chai').should();
var models = require('../../app/models/index');
var request = require('supertest');
var app = require('../../server');
var agent = request.agent(app);


var Umzug = require('umzug');
var umzug = new Umzug({
    storage: 'sequelize',

    storageOptions: {
        sequelize: models.sequelize
    },

    migrations: {
        path: 'app/seeders',
        params: [models.sequelize.getQueryInterface(), models.sequelize.constructor, function () {
            throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
        }],
        pattern: /\.js$/
    }
});


describe('Breeds', function () {


    before(function (done) {
        models.sequelize.sync().then(function (err, results) {
            umzug.up().then(function () {
                done();
            });
        });
    });


    after(function (done) {

        umzug.down().then(function () {
            done();
        });
    });

    describe('get breeds', function () {

        it('should return 200', function (done) {
            agent.get('/api/breeds').end(function (err, result) {
                result.statusCode.should.equal(200);
                done();
            });
        });

        it('should return an array', function (done) {
            agent.get('/api/breeds').end(function (err, result) {
                result.statusCode.should.equal(200);
                result.body.should.be.an('array');
                done();
            });
        });
    });

});