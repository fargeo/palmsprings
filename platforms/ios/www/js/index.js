require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'jquery',
        'knockout',
        'onsenui'
    ], function($, ko, onsenui) {
        var vm = {
            projects: ko.observableArray()
        };

        document.addEventListener('deviceready', function() {
            var db = new PouchDB('palmsprings_development.db', {
                adapter: 'cordova-sqlite',
                iosDatabaseLocation: 'Library'
            });
            
            $.get('http://rmg-dev-4.local:8000/project/ccbd1537-ac5e-11e6-84a5-026d961c88e6', function (r) {
                db.upsert('mock-project', function (doc) {
                    doc.type = 'project';
                    doc.name = 'mock project';
                    doc.graphs = r;
                }).then(function() {
                    db.query({
                        map: function getProjects(doc) {
                            if (doc.type === 'project') {
                                emit(doc._id, doc);
                            }
                        }.toString()
                    }).then(function(docs) {
                        console.log(docs);
                        vm.projects(docs.rows.map(function(row) {
                            return row.value;
                        }));
                    }).catch(function(err) {
                        console.log(err);
                    });
                });
            });
        }, false);

        ko.applyBindings(vm);
    });
});