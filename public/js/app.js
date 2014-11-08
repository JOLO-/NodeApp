require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-2.1.1.min',
        'underscore': 'lib/underscore',
        'raphael': 'lib/raphael',
        'app': '../app'
    },
    shim: {
        'lib/underscore': {
            exports: '_'
        },
        'lib/backbone': {
            deps: ["lib/underscore", "jquery"],
            exports: 'Backbone'
        }
    }
});

require(
    ["jquery",
     "underscore",
     "backbone"
    ],
    function($, _, Backbone) {
        alert('!!!');
    }
);