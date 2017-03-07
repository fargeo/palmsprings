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
                        if (doc.type === 'project' && doc.config) {
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
                $.get('http://localhost:8000/project', function(r) {
                    r.forEach(function (project) {
                        db.upsert(project.projectid, function(doc) {
                            doc.type = 'project';
                            doc.name = project.name;
                            doc.config = project.config;
                            return doc;
                        }).then(function() {
                            vm.getProjects();
                        });
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