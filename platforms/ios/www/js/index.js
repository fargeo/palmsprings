require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'knockout',
    ], function(ko) {
        var vm = {
            readyMsg: ko.observable(false)
        };
        
        document.addEventListener('deviceready', function () {
            var db = new PouchDB('palmsprings.db', {adapter: 'cordova-sqlite', iosDatabaseLocation: 'Library'});
            
            
            db.put({
                _id: 'my-test-entity',
                entity: {
                    msg: 'Hello World!'
                }
            }).catch(function (err) {
                console.log(err);
            });
            
            db.allDocs({'include_docs': true}).then(function (docs) {
                vm.readyMsg(docs.rows[0].doc.entity.msg);
            }).catch(function (err) {
                console.log(err);
            });
        }, false);

        ko.applyBindings(vm);
    });
});
