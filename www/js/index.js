require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'jquery',
        'knockout',
        'onsenui'
    ], function($, ko, onsenui) {
        var db;
        var vm = {
            projects: ko.observableArray(),
            startProject: function() {
                window.location = "form.html";
            },
            getProjects: function() {
                db.query({
                    map: function getProjects(doc) {
                        if (doc.type === 'project' && doc.graphs) {
                            emit(doc._id, doc);
                        }
                    }.toString()
                }).then(function(docs) {
                    vm.projects(docs.rows.map(function(row) {
                        return row.value;
                    }));
                }).catch(function(err) {
                    console.log(err);
                });
            },
            updateProjects: function () {
                $.get('http://localhost:8000/project/ccbd1537-ac5e-11e6-84a5-026d961c88e6', function(r) {
                    db.upsert('mock-project', function(doc) {
                        doc.type = 'project';
                        doc.name = 'mock project';
                        doc.graphs = r;
                        return doc;
                    }).then(function() {
                        vm.getProjects();
                    });
                });
            }
        };

        document.addEventListener('deviceready', function() {
            db = new PouchDB('palmsprings_development.db', {
                adapter: 'cordova-sqlite',
                iosDatabaseLocation: 'Library'
            });
            
            vm.getProjects();
            vm.updateProjects();
        }, false);

        ko.applyBindings(vm);
    });
});