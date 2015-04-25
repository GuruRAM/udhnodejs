var _ = require("underscore");
var items = require("c:\\UrbanData\\udhnodejs\\result.json");
var stations = _(items).chain().sortBy('name').pluck('name').unique().value() ;
console.log(stations);

exports.getStations = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving metro stations');
    res.send(stations);
};

exports.findAll = function(req, res) {
    res.send(_.toArray(WineCollection));
};

exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    WineCollection.push(wine);
};

exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    delete wine.id;
    console.log('Updating wine: ' + id);
};

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
};