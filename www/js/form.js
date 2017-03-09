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
            deviceReady: ko.observable(false),
            widgets_ready: ko.observable(false),
            loadWidget: function(){
                window.location = "widget.html";
            },
            startProject: function(){

                var widgetLookup = {
                    "10000000-0000-0000-0000-000000000001": {
                        "name": "text-widget",
                        "component": "views/components/widgets/text",
                        "datatype": "string",
                        "defaultconfig": "{\"width\": \"100%\", \"placeholder\": \"Enter text\", \"maxLength\": null}"
                    }
                }

                var widgetIds = ["10000000-0000-0000-0000-000000000001"];

                document.addEventListener('DOWNLOADER_error', function(event){
                    var data = event.data;
                    console.log(data);
                });

                document.addEventListener('DOWNLOADER_downloadSuccess', function(event){
                    var data = event.data;
                    console.log(data);
                    vm.widgets_ready(true);


                    console.log(data[0].toURL());
                    define('widgets', [data[0].toURL()], function () {
                        return;
                    });

                    require(['widgets'], function(widgets){
                        console.log(widgets);
                    })

                    //
                });

                var getComponent = function(path){
                    var url = 'http://localhost:8000/media/js/' + path + '.js';
                    downloader.init({folder: "widgets"});
                    downloader.get(url);
                }

                // var widgetIds = [];
                // project_data.forEach(function(project){
                //     project.cards.forEach(function(card){
                //         card.widgets.forEach(function(widget){
                //             if(widgetIds.indexOf(widget.widget_id) == -1){
                //                 widgetIds.push(widget.widget_id);
                //             }
                //         }); 
                //     });
                // });

                // console.log(widgetIds)

                widgetIds.forEach(function(widget){
                    // need to retreive widget def (js and html`)
                    getComponent(widgetLookup[widget].component);
                })

                
            }
        };
        
        ko.applyBindings(vm);

        document.addEventListener('deviceready', function () {
            vm.deviceReady(true);

            vm.startProject();
        }, false);

        var project_data = [
            {
                "subtitle": "Describes heritage resources, which includes monuments, buildings, structures, etc.", 
                "name": "Heritage Resource Model", 
                "domains": [], 
                "cards": [
                    {
                        "itemtext": null, 
                        "helpenabled": false, 
                        "graph_id": "99417385-b8fa-11e6-84a5-026d961c88e6", 
                        "description": "Represents a single node in a graph", 
                        "helptitle": null, 
                        "visible": true, 
                        "nodegroup_id": "82f2dd47-e747-11e6-84a6-026d961c88e6", 
                        "helptext": null, 
                        "sortorder": 3, 
                        "cardid": "82f2dd49-e747-11e6-84a6-026d961c88e6", 
                        "widgets": [
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000002", 
                                "card_id": "82f2dd49-e747-11e6-84a6-026d961c88e6", 
                                "label": "Setting Type", 
                                "node_id": "82f2dd47-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "placeholder": "Select an option", 
                                    "options": []
                                }, 
                                "id": "df6ee7fd-0363-11e7-804b-32001a1b45e0"
                            }
                        ], 
                        "instructions": "For Historic Resources only, define the setting of the historic resource.", 
                        "active": true, 
                        "name": "Setting Type"
                    }, 
                    {
                        "itemtext": null, 
                        "helpenabled": false, 
                        "graph_id": "99417385-b8fa-11e6-84a5-026d961c88e6", 
                        "description": "Describes the conditions, threats, and disturbances affecting a Heritage Resource or Heritage Resource Group. Additional information may include a management recommendation, a condition image, the data the condition was assessed and a description of the condition.", 
                        "helptitle": null, 
                        "visible": true, 
                        "nodegroup_id": "46d9dd23-e747-11e6-84a6-026d961c88e6", 
                        "helptext": null, 
                        "sortorder": null, 
                        "cardid": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                        "widgets": [
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000019", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Condition Image", 
                                "node_id": "46d9dd27-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "maxFilesize": "200", 
                                    "acceptedFiles": ""
                                }, 
                                "id": "df70e654-0363-11e7-b928-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000012", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Disturbance Type", 
                                "node_id": "46d9dd26-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "placeholder": "Select an option", 
                                    "options": []
                                }, 
                                "id": "df712128-0363-11e7-93c8-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000002", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Condition Type", 
                                "node_id": "46d9dd2f-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "placeholder": "Select an option", 
                                    "options": []
                                }, 
                                "id": "df715b21-0363-11e7-a206-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000001", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Condition Description", 
                                "node_id": "46d9dd2d-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "width": "100%", 
                                    "placeholder": "Enter text", 
                                    "maxLength": null
                                }, 
                                "id": "df71ce4a-0363-11e7-b49a-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000004", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Date Condition Assessed", 
                                "node_id": "46d9dd2c-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "maxDate": false, 
                                    "viewMode": "days", 
                                    "dateFormat": "YYYY-MM-DD", 
                                    "placeholder": "Enter date", 
                                    "minDate": false
                                }, 
                                "id": "df72b3f0-0363-11e7-bed7-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000012", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Threat Type", 
                                "node_id": "46d9dd2a-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "placeholder": "Select an option", 
                                    "options": []
                                }, 
                                "id": "df73734c-0363-11e7-90a0-32001a1b45e0"
                            }, 
                            {
                                "widget_id": "10000000-0000-0000-0000-000000000012", 
                                "card_id": "46d9dd25-e747-11e6-84a6-026d961c88e6", 
                                "label": "Recommendation Type", 
                                "node_id": "46d9dd2e-e747-11e6-84a6-026d961c88e6", 
                                "sortorder": null, 
                                "config": {
                                    "placeholder": "Select an option", 
                                    "options": []
                                }, 
                                "id": "df73c800-0363-11e7-b471-32001a1b45e0"
                            }
                        ], 
                        "instructions": "One assessment of condition at a particular point in time. ", 
                        "active": true, 
                        "name": "Condition Assessment"
                    }
                ]
            }
        ]
    });
});
