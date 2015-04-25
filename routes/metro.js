var _ = require("underscore");
var items = require("c:\\UrbanData\\udhnodejs\\result.json");

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    res.send(_.findWhere(WineCollection, {id: id}));
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