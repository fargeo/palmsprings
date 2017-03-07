require([
    '../cordova',
    'js/require-config.js'
], function(cordova) {
    require([
        'jquery',
        'knockout',
    ], function($, ko) {
        var vm = {
            deviceReady: ko.observable(false),
            startProject: function(){

                var widgetLookup = {
                    "10000000-0000-0000-0000-000000000001": {
                        "name": "text-widget",
                        "component": "views/components/widgets/text",
                        "datatype": "string",
                        "defaultconfig": "{\"width\": \"100%\", \"placeholder\": \"Enter text\", \"maxLength\": null}"
                    }
                }

                var project = {
                    widgets:["10000000-0000-0000-0000-000000000001"]
                };

                var getComponent = function(path){
                    $.ajax({
                        url: 'http://localhost:8000/media/js/' + path + '.js',
                        success: function(response) {
                            console.log(response);
                        }
                    });
                }

                project.widgets.forEach(function(widget){
                    // need to retreive widget def (js and html`)
                    getComponent(widgetLookup[widget].component);
                })

                
            }
        };
        
        document.addEventListener('deviceready', function () {
            vm.deviceReady(true);

            vm.startProject();
        }, false);
        
        ko.applyBindings(vm);
    });
});
