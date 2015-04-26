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
    //Score (1-3)
    //AveragePassengerCount
    //Time from
    //Time to
    //Number of sitting places in carriage
    //Number of trains
    //Density per square meter
    var searchQuery = {time: parseInt(req.body.time), name: req.body.name};
    var item = _.findWhere(items, searchQuery);
    console.log(item);
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
    res.render('result.html', { layout: false, result: result});
};
exports.home = function(req, res) {

    var model={
        stations: stations
    };

    res.render('index.html', { layout: false, model: model});
};
exports.getResultSimplified = function(req, res) {
    //params:
    //fromStation
    //toStation
    //time
    //result
    //Score (1-3)
    //AveragePassengerCount
    //Time from
    //Time to
    //Number of sitting places in carriage
    //Number of trains
    //Density per square meter
    var searchQuery = {time: 11, name: 'Пятницкое шоссе'};
    var item = _.findWhere(items, searchQuery);
    console.log(item);
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
    res.render('result.html', { layout: false, result: result});
};