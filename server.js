var express = require('express'),
    _ = require('underscore'),
    path = require('path'),
    http = require('http'),
    metro = require('./routes/metro');
    //node_xls = require('xls-to-json');

var app = express();

app.configure(function () {
    app.engine('html', require('uinexpress').__express)
    app.set('view engine', 'html')
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/stations', metro.getStations);
app.post('/result', metro.getResult);
app.get('/index', metro.home);
app.get('/addStatData', metro.addStatData);
app.get('/result', metro.getResultSimplified);
//saveToFile(loadFromJson());
http.createServer(app).listen(app.get('port'), function () {
});
console.log("Express server listening on port " + app.get('port'));

function loadFromXsl(){
    var node_xj = require("xls-to-json");
    node_xj({
        input: "c:\\UrbanData\\udhnodejs\\APL.xls",  // input xls 
        output: "c:\\UrbanData\\udhnodejs\\APL.json", // output json 
        sheet: "NewSheet"  // specific sheetname
    }, function(err, result) {
        if(err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });
}

function loadFromJson(){
    var items = require('c:\\UrbanData\\udhnodejs\\APL.json');
    var result = [];
    for (index in items) {
        var row = items[index];
        for (var i = 6; i < 25; i++) {
            var loadTrainNumber = row['LoadTrainNumber'+(i+'')].split('/');
            result.push({
                name: row.Name,
                time: i,
                load: row['Load'+(i+'')],
                trainQuantity: loadTrainNumber[1],
                numberInCarriage: loadTrainNumber[0],
                density: row['Density'+(i+'')]
           });
        }
    }
    return result;
}

function saveToFile(result){
    var fs = require('fs');
    fs.writeFile("c:\\UrbanData\\udhnodejs\\result.json", JSON.stringify(result), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}