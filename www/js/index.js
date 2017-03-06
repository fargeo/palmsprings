require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'knockout',
    ], function(ko) {
        var vm = {
            deviceReady: ko.observable(false)
        };
        
        document.addEventListener('deviceready', function () {
            vm.deviceReady(true);
        }, false);
        
        ko.applyBindings(vm);
    });
});
