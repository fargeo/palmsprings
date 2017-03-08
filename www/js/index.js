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
            nav: $("#app-nav")[0],
            projects: ko.observableArray(),
            history: [],
            selection: ko.observable(),
            back: function () {
                vm.selection(vm.history[vm.history.length-1]);
            },
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
                        console.log(row.value);
                        return row.value;
                    }));
                }).catch(function(err) {
                    console.log(err);
                });
            },
            updateProjects: function() {
                $.get('http://localhost:8000/project', function(r) {
                    r.forEach(function(project) {
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
        var previousSelection = vm.selection();
        vm.selection.subscribe(function (val) {
            previousSelection = val;
        }, this, 'beforeChange');
        
        vm.selection.subscribe(function(selection) {
            var lastHistoryItem = vm.history[vm.history.length-1];
            var page;
            if (!selection){
                page = 'projects.html';
            } else if (selection.config && selection.config.resource_models) {
                page = 'resource-models.html';
            } else if (selection.widgets && selection.widgets.length > 0) {
                page = 'card.html';
            } else if (selection.cards) {
                page = 'cards.html';
            }
            if (selection === lastHistoryItem) {
                vm.history.pop();
            } else {
                vm.history.push(previousSelection);
            }
            vm.nav.pushPage(page);
        });

        document.addEventListener('init', function(event) {
            var page = event.target
            ko.applyBindings(vm, page);
        });
        
        document.addEventListener('deviceready', function() {
            db = new PouchDB('palmsprings_development.db', {
                adapter: 'cordova-sqlite',
                iosDatabaseLocation: 'Library'
            });

            vm.getProjects();
            vm.updateProjects();
        }, false);
    });
});