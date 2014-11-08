require('AppRouter', [
    'backbone',
    'views/HomeView'
], function(Backbone, HomeView) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            '': 'home'
        },

        initialize: function() {
            alert('Router initialized');
            if (!this.homeView)
                this.homeView = new HomeView();
            this.homeView.render();
        },

        home: function() {

        }
    });

    var app = new AppRouter();
    Backbone.history.start();

    return AppRouter;
});