
var breedController = function (Breed) {


    var getBreedById = function (req, res, next) {

        Breed.findById(req.params.id,{attributes: ['id','name', 'key']}).then(function (breed){
            if(breed){
                req.breed = breed;
                next();

            }else{
                res.status(404).send('Breed Not Found');
            }
        });

    };

    var getBreed = function (req, res) {
        res.json(req.breed);
    };

    var getAllBreeds = function (req, res) {

        Breed.findAll({attributes: ['id','name', 'key']}).then(function (breeds){
            if(breeds){
                res.json(breeds);

            }else{
                res.status(404).send('Breed Not Found');
            }
        });
    };

    return {getBreed: getBreed, getAllBreeds: getAllBreeds, getBreedById:getBreedById};

};

module.exports = breedController;