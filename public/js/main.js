var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "home",
        "result"         : "getResult",
        "about"             : "about"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('.header').html(this.headerView.el);
    },

    home: function () {
        var that = this;
        this.result = this.result != null ? this.result : {};
        if(this.stationList==null) {
            this.stationList = new StationCollection();
            this.stationList.on("toValueChanged", function(stationTo) {that.result.stationTo = stationTo;
            });
            this.stationList.on("fromValueChanged", function(stationFrom) {that.result.stationFrom = stationFrom;
            });
            this.stationList.on("timeChanged", function(time) {that.result.time = time;
                alert(time);
            });
            this.stationList.fetch({
                success: function () {
                    that.homeView = new HomeView({model: that.stationList});
                    $('#content').html(that.homeView.el);
                    that.homeView.render(that.homeView);
                }
            });
        } else {
            that.homeView = new HomeView({model: that.stationList});
            $('#content').html(this.homeView.el);
            that.homeView.render(that.homeView);
        }

        /*
        if(this.result != null) {
            this.result = new ResultModel();
        }

        new ResultView({model: this.result}).render();
        */
        this.headerView.selectMenuItem('home-menu');
    },

    getResult: function() {
        $.ajax({
            type: "POST",
            url: "result",
            data: JSON.stringify({name:this.result.stationFrom,time:this.result.time}),
            success: function(data) {
                alert(data);
            }
        });
    }
/*
	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection();
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
        this.headerView.selectMenuItem('home-menu');
    },

    wineDetails: function (id) {
        var wine = new Wine({_id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
        this.headerView.selectMenuItem();
    },

	addWine: function() {
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
        this.headerView.selectMenuItem('add-menu');
	},

    about: function () {
        if (!this.aboutView) {
            this.aboutView = new AboutView();
        }
        $('#content').html(this.aboutView.el);
        this.headerView.selectMenuItem('about-menu');
    }
*/
});

utils.loadTemplate(['HomeView', 'HeaderView', 'WineView', 'WineListItemView', 'AboutView'], function() {
    app = new AppRouter();
    Backbone.history.start();
});