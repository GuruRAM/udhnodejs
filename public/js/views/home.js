window.HomeView = Backbone.View.extend({
    events: {
        "click  .stationFrom": "fromValueChanged",
        "click  .stationTo": "toValueChanged",
        "change .time": "timeChanged"
    },

    initialize:function (){
//        var cRender = this.render;
//        this.render = function() { cRender.call }
//        this.render();
    },

    render:function () {
        $(this.el).html(this.template({model: this.model.toJSON()}));
    },

    fromValueChanged: function(evt) {
        this.model.trigger('fromValueChanged', $(evt.target).text());
        $(this.el).find('.stationFromValue').html($(evt.target).text());
    },

    toValueChanged: function(evt) {
        this.model.trigger('toValueChanged', $(evt.target).text());
        $(this.el).find('.stationToValue').html($(evt.target).text());
    },

    timeChanged: function(evt) {
        this.model.trigger('timeChanged', $(evt.target).val());
    }

});