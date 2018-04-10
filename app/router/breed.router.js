var express = require('express');

var routes = function (Breed) {
    var breedRouter = express.Router();
    var breedController = require('../controllers/breed.controller')(Breed);

    breedRouter.use('/:id',breedController.getBreedById);
    breedRouter.route('/:id').get(breedController.getBreed);
    breedRouter.route('/').get(breedController.getAllBreeds);

    return breedRouter;
};

module.exports = routes;
