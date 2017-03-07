require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'knockout',
    ], function(ko) {
        var vm = {
            projects: ko.observableArray()
        };
        
        document.addEventListener('deviceready', function () {
            var db = new PouchDB('palmsprings_projects.db', {adapter: 'cordova-sqlite', iosDatabaseLocation: 'Library'});
            
            db.put({
                _id: 'my-test-project',
                type: 'project',
                name: 'my project'
            }).catch(function (err) {
                console.log(err);
            });
            
            db.put({
                _id: 'my-test-project-2',
                type: 'project',
                name: 'my project 2'
            }).catch(function (err) {
                console.log(err);
            });
            
            db.allDocs({'include_docs': true}).then(function (docs) {
                vm.projects(docs.rows.map(function(row) {
                    return row.doc;
                }));
            }).catch(function (err) {
                console.log(err);
            });
        }, false);

        ko.applyBindings(vm);
    });
});
