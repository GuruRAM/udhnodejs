var _ = require("underscore");
var items = require("./../result.json");
var stations = _(items).chain().sortBy('name').pluck('name').unique().map(function(item){return {name: item, color: 'blue'}}).value();
console.log(stations);

exports.getStations = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving metro stations');
    res.send(stations);
};

exports.getResult = function(req, res) {
    //params:
    //fromStation
    //toStation
    //time
    //result
    //Score ќценка (1-3)
    //AveragePassengerCount —реднее количество людей в вагоне
    //Time from
    //Time to
    //Number of sitting places in carriage
    //Number of trains
    //Density плотность на квадратный метр
    var item = _.findWhere(items, params);
    var passengers = parseInt(item.numberInCarriage);
    var defaultSittingPlaces = 42;
    var score = 3;
    if(defaultSittingPlaces-passengers >= 10)
        score = 1;
    else if(defaultSittingPlaces-passengers >= -5)
        score = 2;   
    var result = {
        score: score,
        averagePassengerCount: passengers,
        timeFrom: item.time,
        timeTo: parseInt(item.time) + 1,
        defaultSittingPlaces: defaultSittingPlaces,
        trainQuantity: item.trainQuantity,
        density: item.density
    };
    res.send(result);
};