define([], function() {
	require.config({
		paths: {
			'async': '../bower_components/requirejs-plugins/src/async',
			'text': '../bower_components/requirejs-text/text',
			'jquery': '../bower_components/jquery/dist/jquery.min',
			'js-cookie': '../bower_components/js-cookie/src/js.cookie',
			'select2': '../bower_components/select2v3/index',
			'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
			'jquery-ui': '../bower_components/jqueryui/ui/jquery-ui',
			'flexslider': '../bower_components/flexslider/2.2.2/jquery.flexslider-min',
			'easing': '../bower_components/jquery-easing/jquery.easing.min',
			'backbone': '../bower_components/backbone/backbone',
			'underscore': '../bower_components/underscore/underscore-min',
			'jquery-validate': '../bower_components/jquery-validate/jquery.validate',
			'd3': '../bower_components/d3/d3.min',
			'dropzone': '../bower_components/dropzone/downloads/dropzone-amd-module.min',
			'summernote': '../bower_components/summernote/dist/summernote.min',
			'knockout': '../bower_components/knockout/dist/knockout',
			'knockout-mapping': '../bower_components/bower-knockout-mapping/dist/knockout.mapping.min',
			'moment': '../bower_components/moment/min/moment.min',
			'bootstrap-datetimepicker': '../bower_components/bootstrap3-datetimepicker/build/js/bootstrap-datetimepicker.min',
			'shp': '../bower_components/shp/index',
			'blueimp-gallery': '../bower_components/blueimp-gallery/js/blueimp-gallery.min',
			'blueimp-jquery': '../bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min',
			'blueimp-helper': '../bower_components/blueimp-gallery/js/blueimp-helper.min',
			'datatables.net': '../bower_components/datatables.net/js/jquery.dataTables.min',
			'datatables.net-bs': '../bower_components/datatables.net-bs/js/dataTables.bootstrap.min',
			'datatables.net-responsive': '../bower_components/datatables.net-responsive/js/dataTables.responsive.min',
			'datatables.net-responsive-bs': '../bower_components/datatables.net-responsive-bs/js/responsive.bootstrap',
			'chosen': '../bower_components/chosen/chosen.jquery.min',
			'mapbox-gl': '../bower_components/mapbox-gl/mapbox-gl',
			'mapbox-gl-draw': '../bower_components/mapbox-gl-plugins/plugins/src/mapbox-gl-draw/v0.14.0/mapbox-gl-draw',
			'jsts': '../bower_components/jsts.min/index',
			'proj4': '../bower_components/proj4/dist/proj4',
			'noUiSlider': '../bower_components/nouislider/distribute/nouislider.min',
			'geojson-extent': '../bower_components/geojson-extent/geojson-extent',
			'bootstrap-colorpicker': '../bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min',
			'uuid': '../bower_components/uuid.js/dist/uuid.core',
			'turf': '../bower_components/turf/index',
			'geohash': '../bower_components/geohash/latlon-geohash',
			'pouchdb': '../bower_components/pouchdb/dist/pouchdb.min',
			'pouchdb.cordova-sqlite': '../lib/pouchdb.cordova-sqlite'
		},
		packages: [{
			name: "codemirror",
			location: '../bower_components/codemirror',
			main: "lib/codemirror"
		}],
		shim: {
			'pouchdb.cordova-sqlite': {
				deps: ['pouchdb']				
			},
			'nifty': {
				deps: ['bootstrap', 'jquery', 'jquery-ui']
			},
			'chosen': {
				deps: ['jquery']
			},
			'bootstrap': {
				deps: ['jquery', 'jquery-ui']
			},
			'knockout-mapping': {
				deps: ['knockout']
			},
			'jquery-validate': {
				deps: ['jquery']
			},
			'jquery-ui': {
				deps: ['jquery']
			},
			'datatables': {
				deps: ['jquery']
			},
			'datatables.net': {
				deps: ['jquery']
			},
			'noUiSlider': {
				deps: ['jquery'],
				exports : '$'
			},
			'mapbox-gl-draw': {
				deps: ['mapbox-gl'],
				exports: 'mapboxgl.Draw'
			},
			'select2': {
				deps: ['jquery'],
			},
			'moment': {
				deps: ['jquery']
			},
			'uuid': {
				exports: 'UUID'
			},
			'geohash': {
				exports: 'Geohash'
			}
		}
	});
});