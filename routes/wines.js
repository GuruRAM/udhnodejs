    var _ = require("underscore");

    var WineCollection = [
    {
	id: 1,
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.",
        picture: "saint_cosme.jpg"
    },
    {
        id: 2,
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.",
        picture: "lan_rioja.jpg"
    },
    {
        id: 3,
        name: "MARGERUM SYBARITE",
        year: "2010",
        grapes: "Sauvignon Blanc",
        country: "USA",
        region: "California Central Cosat",
        description: "The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.",
        picture: "margerum.jpg"
    },
    {
        id: 4,
        name: "OWEN ROE \"EX UMBRIS\"",
        year: "2009",
        grapes: "Syrah",
        country: "USA",
        region: "Washington",
        description: "A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Don't miss this award-winning taste sensation.",
        picture: "ex_umbris.jpg"
    },
    {
        id: 5,
        name: "REX HILL",
        year: "2009",
        grapes: "Pinot Noir",
        country: "USA",
        region: "Oregon",
        description: "One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.",
        picture: "rex_hill.jpg"
    },
    {
        id: 6,
        name: "VITICCIO CLASSICO RISERVA",
        year: "2007",
        grapes: "Sangiovese Merlot",
        country: "Italy",
        region: "Tuscany",
        description: "Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.",
        picture: "viticcio.jpg"
    },
    {
        id: 7,
        name: "CHATEAU LE DOYENNE",
        year: "2005",
        grapes: "Merlot",
        country: "France",
        region: "Bordeaux",
        description: "Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.",
        picture: "le_doyenne.jpg"
    },
    {
        id: 8,
        name: "DOMAINE DU BOUSCAT",
        year: "2009",
        grapes: "Merlot",
        country: "France",
        region: "Bordeaux",
        description: "The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.",
        picture: "bouscat.jpg"
    },
    {
        id: 9,
        name: "BLOCK NINE",
        year: "2009",
        grapes: "Pinot Noir",
        country: "USA",
        region: "California",
        description: "With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.",
        picture: "block_nine.jpg"
    },
    {
        id: 10,
        name: "DOMAINE SERENE",
        year: "2007",
        grapes: "Pinot Noir",
        country: "USA",
        region: "Oregon",
        description: "Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.",
        picture: "domaine_serene.jpg"
    },
    {
        id: 11,
        name: "BODEGA LURTON",
        year: "2011",
        grapes: "Pinot Gris",
        country: "Argentina",
        region: "Mendoza",
        description: "Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.",
        picture: "bodega_lurton.jpg"
    },
    {
        id: 12,
        name: "LES MORIZOTTES",
        year: "2009",
        grapes: "Chardonnay",
        country: "France",
        region: "Burgundy",
        description: "Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.",
        picture: "morizottes.jpg"
    },
    {
        id: 13,
        name: "ARGIANO NON CONFUNDITUR",
        year: "2009",
        grapes: "Cabernet Sauvignon",
        country: "Italy",
        region: "Tuscany",
        description: "Like a symphony, this cabernet has a wide range of notes that will delight the taste buds and linger in the mind.",
        picture: "argiano.jpg"
    },
    {
        id: 14,
        name: "DINASTIA VIVANCO ",
        year: "2008",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "Whether enjoying a fine cigar or a nicotine patch, don't pass up a taste of this hearty Rioja, both smooth and robust.",
        picture: "dinastia.jpg"
    },
    {
        id: 15,
        name: "PETALOS BIERZO",
        year: "2009",
        grapes: "Mencia",
        country: "Spain",
        region: "Castilla y Leon",
        description: "For the first time, a blend of grapes from two different regions have been combined in an outrageous explosion of flavor that cannot be missed.",
        picture: "petalos.jpg"
    },
    {
        id: 16,
        name: "SHAFER RED SHOULDER RANCH",
        year: "2009",
        grapes: "Chardonnay",
        country: "USA",
        region: "California",
        description: "Keep an eye out for this winery in coming years, as their chardonnays have reached the peak of perfection.",
        picture: "shafer.jpg"
    },
    {
        id: 17,
        name: "PONZI",
        year: "2010",
        grapes: "Pinot Gris",
        country: "USA",
        region: "Oregon",
        description: "For those who appreciate the simpler pleasures in life, this light pinot grigio will blend perfectly with a light meal or as an after dinner drink.",
        picture: "ponzi.jpg"
    },
    {
        id: 18,
        name: "HUGEL",
        year: "2010",
        grapes: "Pinot Gris",
        country: "France",
        region: "Alsace",
        description: "Fresh as new buds on a spring vine, this dewy offering is the finest of the new generation of pinot grigios.  Enjoy it with a friend and a crown of flowers for the ultimate wine tasting experience.",
        picture: "hugel.jpg"
    },
    {
        id: 19,
        name: "FOUR VINES MAVERICK",
        year: "2011",
        grapes: "Zinfandel",
        country: "USA",
        region: "California",
        description: "o yourself a favor and have a bottle (or two) of this fine zinfandel on hand for your next romantic outing.  The only thing that can make this fine choice better is the company you share it with.",
        picture: "fourvines.jpg"
    },
    {
        id: 19,
        name: "QUIVIRA DRY CREEK VALLEY",
        year: "2009",
        grapes: "Zinfandel",
        country: "USA",
        region: "California",
        description: "Rarely do you find a zinfandel this oakey from the Sonoma region. The vintners have gone to extremes to duplicate the classic flavors that brought high praise in the early '90s.",
        picture: "quivira.jpg"
    },
    {
        id: 20,
        name: "CALERA 35TH ANNIVERSARY",
        year: "2010",
        grapes: "Pinot Noir",
        country: "USA",
        region: "California",
        description: "Fruity and bouncy, with a hint of spice, this pinot noir is an excellent candidate for best newcomer from Napa this year.",
        picture: "calera.jpg"
    },
    {
        id: 21,
        name: "CHATEAU CARONNE STE GEMME",
        year: "2010",
        grapes: "Cabernet Sauvignon",
        country: "France",
        region: "Bordeaux",
        description: "Find a sommelier with a taste for chocolate and he's guaranteed to have this cabernet on his must-have list.",
        picture: "caronne.jpg"
    },
    {
        id: 22,
        name: "MOMO MARLBOROUGH",
        year: "2010",
        grapes: "Sauvignon Blanc",
        country: "New Zealand",
        region: "South Island",
        description: "Best served chilled with melon or a nice salty prosciutto, this sauvignon blanc is a staple in every Italian kitchen, if not on their wine list.  Request the best, and you just may get it.",
        picture: "momo.jpg"
    },
    {
        id: 23,
        name: "WATERBROOK",
        year: "2009",
        grapes: "Merlot",
        country: "USA",
        region: "Washington",
        description: "Legend has it the gods didn't share their ambrosia with mere mortals.  This merlot may be the closest we've ever come to a taste of heaven.",
        picture: "waterbrook.jpg"
    }];

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