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
            injectTemplate: function(template_fileEntry){
                function create(htmlStr) {
                    var frag = document.createDocumentFragment();
                    var temp = document.createElement('div');
                    temp.innerHTML = htmlStr;
                    while (temp.firstChild) {
                        frag.appendChild(temp.firstChild);
                    }
                    return frag;
                }

                template_fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                        var fragment = create(this.result);
                        document.body.insertBefore(fragment, document.body.firstChild);
                    };
                    reader.readAsText(file);
                }, function(err){});
                
            },
            injectWidget: function(fileEntry){
                function create(text) {
                    var temp = document.createElement('script');
                    temp.type = 'text/javascript';
                    temp.text = text;
                    return temp;
                }

                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function() {
                        // use this to insert a script tag
                        var fragment = create(this.result);
                        document.body.insertBefore(fragment, document.body.lastChild);
                        //eval(this.result);
                    };
                    reader.readAsText(file);
                }, function(err){});
                
            },
            loadWidgets: function(widgets) {
                component_paths = []
                template_paths = []

                widgets.forEach(function(widget){
                    // need to retreive widget def (js and html`)
                    if(component_paths.indexOf(widget.component) == -1){
                        var url = 'http://localhost:8000/media/js/' + widget.component + '.js';
                        component_paths.push({url:url});
                    }
                    if(template_paths.indexOf(widget.template) == -1){
                        var url = 'http://localhost:8000/templates/' + widget.template;
                        template_paths.push({url:url});
                    }
                });

                template_paths.forEach(function(template){

                });

                downloader.init({folder: "templates"});
                downloader.getMultipleFiles(template_paths);
                
                // downloader.init({folder: "components"});
                downloader.getMultipleFiles(component_paths);
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
                        vm.widgetLookup = {};
                        row.value.config.widget_details.forEach(function(widget){
                            vm.widgetLookup[widget.id] = widget;
                        })
                        vm.loadWidgets(row.value.config.widget_details);
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

        document.addEventListener('DOWNLOADER_downloadSuccess', function(event){
            var data = event.data;
            //console.log(data);

            if(data[0].name.split('.').pop() === 'htm'){
                vm.injectTemplate(data[0]);
            }else{
                vm.injectWidget(data[0]);
                
                // define('widgets', [data[0].toURL()], function () {
                //     return;
                // });

                // require(['widgets'], function(widgets){
                //     console.log(widgets);
                // })
                
            }
        });
    });
});