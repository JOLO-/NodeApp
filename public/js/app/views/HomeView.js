require('views/HomeView', [
   'backbone',
    'jquery',
    'underscore'
], function(Backbone, $, _) {
    return Backbone.view.extend({

        initialize: function() {

        },

        render: function() {
            var paper = new Raphael($('.canvas_container'), 500, 500);
            paper.circle(100, 100, 80);
            this.$el.html($('.canvas_container')); //TODO: _.template
            this.$el.show();
        }
    });
});