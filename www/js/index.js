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
            var db = new PouchDB('palmsprings.db', {adapter: 'cordova-sqlite', iosDatabaseLocation: 'Library'});
            
            vm.deviceReady(true);
            
            db.put({
                _id: 'my-test-entity',
                entity: {
                    msg: 'Hello World!'
                }
            }).catch(function (err) {
                console.log(err);
            });
            
            db.allDocs({'include_docs': true}).then(function (docs) {
                console.log(docs)
            }).catch(function (err) {
                console.log(err);
            });
        }, false);

        ko.applyBindings(vm);
    });
});
