define([], function() {
	require.config({
		paths: {
			'viewmodels': 'viewmodels/',
			'plugins': 'plugins/',
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
			'pouchdb.cordova-sqlite': '../lib/pouchdb.cordova-sqlite',
			'onsenui': '../bower_components/onsenui/js/onsenui.min'
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

// put values here that should be accessible application wide
define('arches', [], function () {
    return {
        urls: {
            home: "/index.htm",
            media: "/media/",
            uploadedfiles: "/files/",
            concept_tree: "/concepts/tree/",
            concept: "/concepts/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
            concept_search: "/concepts/search",
            concept_value: "/conceptvalue/",
            concept_manage_parents: "/concepts/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/manage_parents/",
            export_concept: "/concepts/export/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
            export_concept_collections: "/concepts/export/collections",
            dropdown: "/concepts/dropdown",
            get_pref_label: "/concepts/get_pref_label",
            from_sparql_endpoint: "/concepts/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/from_sparql_endpoint",
            search_sparql_endpoint: "/concepts/search_sparql_endpoint",
            confirm_delete: "/concepts/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/confirm_delete/",
            edit_history: "/resources/history/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
            search_terms: "/search/terms",
            search_results: "/search/resources",
            search_results_export: "/search/export",
            map_layers: "/resources/layers/",
            map_markers: "/resources/markers/",
            reports: "/reports/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            buffer: "/buffer/",
            get_admin_areas: "/get_admin_areas",
            config: "/config/",
            node: "/node/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
            graph: "/graph/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            card: "/card/",
            form: "/form/",
            resource: "/resource",
            resource_editor: "/resource/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            resource_report: "/report/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            resource_data: "/resource/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/data/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace(/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/g, ''),
            related_resources: "/resource/related/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            tile: "/tile",
            geocoder: "/geocoder",
            report_editor: "/report_editor/",
            reorder_tiles: "/tiles/reorder_tiles",
            apply_functions: "/graph/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/apply_functions".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            remove_functions: "/graph/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa/remove_functions".replace('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', ''),
            tileserver: "/tileserver"
        },
        confirmNav: {
            title: "Edits pending...",
            text: "You currently have edits pending, are you sure you would like to proceed (and discard any pending edits)?"
        },
        confirmGraphDelete: {
            title: "Delete Branch/Resource Model?",
            text: "Deleting this branch/resource model will remove it (and all associated data) entirely.  Are you sure you would like to proceed?"
        },
        confirmResourceDelete: {
            title: "Delete Resource?",
            text: "Deleting this resource will remove it (and all associated data) entirely.  Are you sure you would like to proceed?"
        },
        confirmMaplayerDelete: {
            title: "Delete map layer?",
            text: "Deleting this map layer will remove it entirely.  You cannot undo this action.  Are you sure you would like to proceed?"
        },
        graphImportFailed: {
            title: "Graph import failed."
        },
        requestFailed: {
            title: "Request Failed...",
            text: "Sorry! The request failed. Please try again.  Contact your system administrator if the problem persists."
        },
        mapboxApiKey: '',
        hexBinSize: 100,
        mapboxSprites: 'mapbox://sprites/mapbox/basic-v9',
        mapboxGlyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
        hexBinBounds: [-122, -52, 128, 69],
        hexBinBounds: [-122, -52, 128, 69],
        mapDefaultX: 0,
        mapDefaultY: 0,
        mapDefaultZoom: 0,
        mapDefaultMinZoom: 0,
        mapDefaultMaxZoom: 20,
        mapSources: {
            'mapbox-streets': {"url": "mapbox://mapbox.mapbox-streets-v7", "type": "vector"},
        
            'mapbox-satellite': {"url": "mapbox://mapbox.satellite", "type": "raster", "tileSize": 256},
        
            'mapzen': {"tiles": ["https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-LM25tq4"], "type": "vector"},
        
            'stamen-terrain': {"tiles": ["http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg"], "type": "raster", "tileSize": 256},
        
            'geocode-point': {"type": "geojson", "data": {"type": "FeatureCollection", "features": []}},
        
            'search-query': {"type": "geojson", "data": {"type": "FeatureCollection", "features": []}},
        
            'resources-f74db64f-e741-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/f74db64f-e741-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-be9d6e1b-e742-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/be9d6e1b-e742-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-444edae6-fad7-11e6-b824-6c4008b05c4c': {"tiles": ["/tileserver/444edae6-fad7-11e6-b824-6c4008b05c4c/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-d473a403-e744-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/d473a403-e744-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-82f2dd53-e747-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/82f2dd53-e747-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-9bcafa7d-e749-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/9bcafa7d-e749-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        
            'resources-86a103e9-e74a-11e6-84a6-026d961c88e6': {"tiles": ["/tileserver/86a103e9-e74a-11e6-84a6-026d961c88e6/{z}/{x}/{y}.pbf"], "type": "vector"},
        },
        mapLayers: [{
            'maplayerid': '90c8dc4c-0396-11e7-912a-6fa9d3de8c99',
            'name': 'stamen-terrain',
            'layer_definitions': [{"maxzoom": 22, "source": "stamen-terrain", "minzoom": 0, "type": "raster", "id": "stamen-terrain"}],
            'isoverlay': false,
            'icon': 'fa fa-road',
            'activated': true,
            'addtomap': false,
            'is_resource_layer': false
        },{
            'maplayerid': '90c8e3cc-0396-11e7-912a-cbe8f0b00711',
            'name': 'satellite',
            'layer_definitions': [{"source": "mapbox-satellite", "source-layer": "mapbox_satellite_full", "type": "raster", "id": "satellite"}],
            'isoverlay': false,
            'icon': '',
            'activated': true,
            'addtomap': false,
            'is_resource_layer': false
        },{
            'maplayerid': '90c8ed54-0396-11e7-912a-dfc970974d90',
            'name': 'streets',
            'layer_definitions': [{"source": "mapbox-streets", "filter": ["==", "class", "national_park"], "paint": {"fill-color": "#d2edae", "fill-opacity": 0.75}, "source-layer": "landuse_overlay", "type": "fill", "id": "landuse_overlay_national_park"}, {"source": "mapbox-streets", "filter": ["==", "class", "park"], "paint": {"fill-color": "#d2edae"}, "source-layer": "landuse", "type": "fill", "id": "landuse_park"}, {"source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["in", "class", "river", "canal"]], "paint": {"line-color": "#a0cfdf", "line-width": {"base": 1.4, "stops": [[8, 0.5], [20, 15]]}}, "source-layer": "waterway", "type": "line", "id": "waterway"}, {"paint": {"fill-color": "#a0cfdf"}, "source-layer": "water", "type": "fill", "id": "water", "source": "mapbox-streets"}, {"paint": {"fill-color": "#d6d6d6"}, "source-layer": "building", "type": "fill", "id": "building", "source": "mapbox-streets"}, {"layout": {"line-cap": "butt", "line-join": "miter"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway_link", "street", "street_limited", "service", "track", "pedestrian", "path", "link"], ["==", "structure", "tunnel"]]], "paint": {"line-color": "#efefef", "line-dasharray": [0.36, 0.18], "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "tunnel_minor"}, {"layout": {"line-cap": "butt", "line-join": "miter"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"], ["==", "structure", "tunnel"]]], "paint": {"line-color": "#fff", "line-dasharray": [0.28, 0.14], "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "tunnel_major"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway_link", "street", "street_limited", "service", "track", "pedestrian", "path", "link"], ["in", "structure", "none", "ford"]]], "paint": {"line-color": "#efefef", "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "road_minor"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"], ["in", "structure", "none", "ford"]]], "paint": {"line-color": "#fff", "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "road_major"}, {"layout": {"line-cap": "butt", "line-join": "miter"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway_link", "street", "street_limited", "service", "track", "pedestrian", "path", "link"], ["==", "structure", "bridge"]]], "paint": {"line-gap-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}, "line-color": "#dedede", "line-width": {"base": 1.6, "stops": [[12, 0.5], [20, 10]]}}, "source-layer": "road", "type": "line", "id": "bridge_minor case"}, {"layout": {"line-cap": "butt", "line-join": "miter"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"], ["==", "structure", "bridge"]]], "paint": {"line-gap-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}, "line-color": "#dedede", "line-width": {"base": 1.6, "stops": [[12, 0.5], [20, 10]]}}, "source-layer": "road", "type": "line", "id": "bridge_major case"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway_link", "street", "street_limited", "service", "track", "pedestrian", "path", "link"], ["==", "structure", "bridge"]]], "paint": {"line-color": "#efefef", "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "bridge_minor"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"], ["==", "structure", "bridge"]]], "paint": {"line-color": "#fff", "line-width": {"base": 1.4, "stops": [[6, 0.5], [20, 30]]}}, "source-layer": "road", "type": "line", "id": "bridge_major"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["all", ["<=", "admin_level", 2], ["==", "maritime", 0]]], "paint": {"line-color": "#8b8a8a", "line-width": {"base": 1.3, "stops": [[3, 0.5], [22, 15]]}}, "source-layer": "admin", "type": "line", "id": "admin_country"}, {"layout": {"icon-size": 1, "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-anchor": "top", "icon-image": "{maki}-11", "text-field": "{name_en}", "text-offset": [0, 0.5], "text-size": 11, "text-max-width": 8}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "Point"], ["all", ["==", "scalerank", 1], ["==", "localrank", 1]]], "paint": {"text-halo-blur": 1, "text-color": "#666", "text-halo-width": 1, "text-halo-color": "rgba(255,255,255,0.75)"}, "minzoom": 5, "source-layer": "poi_label", "type": "symbol", "id": "poi_label"}, {"layout": {"text-letter-spacing": 0.1, "symbol-placement": "line", "text-size": {"base": 1.4, "stops": [[10, 8], [20, 14]]}, "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-field": "{name_en}", "text-transform": "uppercase"}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "LineString"], ["in", "class", "motorway", "primary", "secondary", "tertiary", "trunk"]], "paint": {"text-color": "#666", "text-halo-width": 2, "text-halo-color": "rgba(255,255,255,0.75)"}, "source-layer": "road_label", "type": "symbol", "id": "road_major_label"}, {"layout": {"text-size": {"stops": [[6, 12], [12, 16]]}, "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-field": "{name_en}", "text-max-width": 6}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "Point"], ["in", "type", "town", "village", "hamlet", "suburb", "neighbourhood", "island"]], "paint": {"text-halo-blur": 1, "text-color": "#666", "text-halo-width": 1, "text-halo-color": "rgba(255,255,255,0.75)"}, "minzoom": 8, "source-layer": "place_label", "type": "symbol", "id": "place_label_other"}, {"layout": {"text-size": {"stops": [[3, 12], [8, 16]]}, "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"], "text-field": "{name_en}", "text-max-width": 10}, "source": "mapbox-streets", "filter": ["all", ["==", "$type", "Point"], ["==", "type", "city"]], "paint": {"text-halo-blur": 1, "text-color": "#666", "text-halo-width": 1, "text-halo-color": "rgba(255,255,255,0.75)"}, "source-layer": "place_label", "maxzoom": 16, "type": "symbol", "id": "place_label_city"}, {"layout": {"text-size": {"stops": [[3, 14], [8, 22]]}, "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"], "text-field": "{name_en}", "text-max-width": 10}, "source": "mapbox-streets", "filter": ["==", "$type", "Point"], "paint": {"text-halo-blur": 1, "text-color": "#666", "text-halo-width": 1, "text-halo-color": "rgba(255,255,255,0.75)"}, "source-layer": "country_label", "maxzoom": 12, "type": "symbol", "id": "country_label"}],
            'isoverlay': false,
            'icon': '',
            'activated': true,
            'addtomap': true,
            'is_resource_layer': false
        },{
            'maplayerid': '90c90082-0396-11e7-912a-279e1c47d66c',
            'name': 'mapzen',
            'layer_definitions': [{"paint": {"background-color": "#ededed"}, "type": "background", "id": "background"}, {"source": "mapzen", "filter": ["==", "$type", "LineString"], "paint": {"line-color": "#7acad0", "line-width": {"base": 1.2, "stops": [[8, 0.5], [20, 15]]}}, "source-layer": "water", "type": "line", "id": "water-line"}, {"source": "mapzen", "filter": ["==", "$type", "Polygon"], "paint": {"fill-color": "#7acad0"}, "source-layer": "water", "type": "fill", "id": "water-polygon"}, {"source": "mapzen", "filter": ["in", "kind", "park", "forest", "garden", "grass", "farm", "meadow", "playground", "golf_course", "nature_reserve", "wetland", "wood", "cemetery"], "paint": {"fill-color": "#c2cd44"}, "minzoom": 6, "source-layer": "landuse", "type": "fill", "id": "park"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["all", ["==", "$type", "LineString"], ["==", "kind", "river"]], "paint": {"line-color": "#7acad0", "line-width": {"base": 1.2, "stops": [[8, 0.75], [20, 15]]}}, "minzoom": 6, "source-layer": "water", "type": "line", "id": "river"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["all", ["==", "$type", "LineString"], ["==", "kind", "stream"]], "paint": {"line-color": "#7acad0", "line-width": {"base": 1.4, "stops": [[10, 0.5], [20, 15]]}}, "minzoom": 11, "source-layer": "water", "type": "line", "id": "stream-etc"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["==", "admin_level", "2"], "paint": {"line-color": "#afd3d3", "line-width": {"base": 2, "stops": [[1, 0.5], [7, 3]]}}, "source-layer": "places", "maxzoom": 4, "type": "line", "id": "country-boundary"}, {"source": "mapzen", "filter": ["==", "admin_level", "4"], "paint": {"fill-outline-color": "#cacecc", "fill-color": "#ededed"}, "source-layer": "places", "maxzoom": 10, "type": "fill", "id": "state-boundary"}, {"source": "mapzen", "filter": ["==", "railway", "subway"], "paint": {"line-color": "#ef7369", "line-dasharray": [2, 1]}, "source-layer": "roads", "type": "line", "id": "subways"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["any", ["==", "is_tunnel", "yes"]], "paint": {"line-color": "#afd3d3", "line-dasharray": [1, 2], "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}}, "source-layer": "roads", "type": "line", "id": "link-tunnel"}, {"paint": {"fill-outline-color": "#afd3d3", "fill-color": "#ededed"}, "source-layer": "buildings", "type": "fill", "id": "buildings", "source": "mapzen"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["any", ["==", "kind", "minor_road"], ["==", "kind", "major_road"]], "paint": {"line-color": "#c0c4c2", "line-width": {"base": 1.55, "stops": [[4, 0.25], [20, 30]]}}, "source-layer": "roads", "type": "line", "id": "road"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["any", ["==", "is_link", "yes"], ["==", "is_bridge", "yes"]], "paint": {"line-color": "#c0c4c2", "line-width": {"base": 1.55, "stops": [[4, 0.5], [8, 1.5], [20, 40]]}}, "source-layer": "roads", "type": "line", "id": "link-bridge"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["==", "kind", "highway"], "paint": {"line-color": "#5d6765", "line-width": {"base": 1.55, "stops": [[4, 0.5], [8, 1.5], [20, 40]]}}, "source-layer": "roads", "type": "line", "id": "highway"}, {"layout": {"line-cap": "round", "line-join": "round"}, "source": "mapzen", "filter": ["==", "kind", "path"], "paint": {"line-color": "#5d6765", "line-dasharray": [2, 2], "line-width": {"base": 1.8, "stops": [[10, 0.15], [20, 15]]}}, "minzoom": 12, "source-layer": "roads", "type": "line", "id": "path"}, {"layout": {"text-field": "{name}", "text-font": ["Open Sans Italic", "Arial Unicode MS Regular"], "text-max-width": 14, "text-letter-spacing": 0.1}, "source": "mapzen", "filter": ["==", "kind", "ocean"], "paint": {"text-color": "#ededed", "text-halo-color": "rgba(0,0,0,0.2)"}, "minzoom": 2, "source-layer": "places", "maxzoom": 6, "type": "symbol", "id": "ocean-label"}, {"layout": {"text-field": "{name}", "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-max-width": 10}, "source": "mapzen", "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "neighbourhood"]], "paint": {"text-color": "#cb4b49", "text-halo-color": "rgba(255,255,255,0.5)"}, "minzoom": 12, "source-layer": "places", "type": "symbol", "id": "other-label"}, {"layout": {"text-field": "{name}", "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-max-width": 10, "text-letter-spacing": 0.1}, "source": "mapzen", "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "city"]], "paint": {"text-color": "#384646", "text-halo-color": "rgba(255,255,255,0.5)"}, "minzoom": 10, "source-layer": "places", "maxzoom": 14, "type": "symbol", "id": "city-label"}, {"layout": {"text-field": "{name}", "text-font": ["Open Sans Regular", "Arial Unicode MS Regular"], "text-max-width": 8}, "source": "mapzen", "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "state"]], "paint": {"text-color": "#f27a87", "text-halo-color": "rgba(255,255,255,0.5)"}, "minzoom": 6, "source-layer": "places", "maxzoom": 12, "type": "symbol", "id": "state-label"}, {"layout": {"text-field": "{name}", "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"], "text-max-width": 4}, "source": "mapzen", "filter": ["all", ["==", "$type", "Point"], ["==", "kind", "country"]], "paint": {"text-color": "#cb4b49", "text-halo-color": "rgba(255,255,255,0.5)"}, "source-layer": "places", "maxzoom": 7, "type": "symbol", "id": "country-label"}],
            'isoverlay': false,
            'icon': '',
            'activated': true,
            'addtomap': false,
            'is_resource_layer': false
        },{
            'maplayerid': '90ca02e8-0396-11e7-912a-7b7d03de73b7',
            'name': 'Search Results',
            'layer_definitions': [{"layout": {}, "source": "search-results-hex", "filter": ["all", [">", "doc_count", 0]], "paint": {"fill-extrusion-color": {"property": "doc_count", "stops": [[0, "#54278f"], [10, "#756bb1"], [50, "#9e9ac8"], [200, "#cbc9e2"], [500, "#f2f0f7"]]}, "fill-extrusion-height": {"property": "doc_count", "type": "exponential", "stops": [[0, 0], [1000, 65535]]}, "fill-extrusion-opacity": 0.7}, "type": "fill-extrusion", "id": "search-results-hex"}, {"layout": {"icon-image": "marker-15", "icon-allow-overlap": true, "icon-offset": [0, -6], "icon-size": 1}, "source": "search-results-points", "filter": ["all", ["==", "$type", "Point"], ["!=", "highlight", true]], "paint": {}, "type": "symbol", "id": "search-results-points-markers"}, {"layout": {"icon-image": "marker-15", "icon-allow-overlap": true, "icon-offset": [0, -6], "icon-size": 2}, "source": "search-results-points", "filter": ["all", ["==", "$type", "Point"], ["==", "highlight", true]], "paint": {}, "type": "symbol", "id": "search-results-points-markers-highlighted"}],
            'isoverlay': true,
            'icon': 'ion-search',
            'activated': true,
            'addtomap': true,
            'is_resource_layer': false
        },],
        conceptCollections: [],
        resources: [{
          'maplayerid': '243f8689-b8f6-11e6-84a5-026d961c88e6',
          'graphid': '243f8689-b8f6-11e6-84a5-026d961c88e6',
          'name': 'Activity Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': '',
        },{
          'maplayerid': 'ccbd1537-ac5e-11e6-84a5-026d961c88e6',
          'graphid': 'ccbd1537-ac5e-11e6-84a5-026d961c88e6',
          'name': 'Actor Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': 'fa fa-android',
        },{
          'maplayerid': 'ff623370-fa12-11e6-b98b-6c4008b05c4c',
          'graphid': 'ff623370-fa12-11e6-b98b-6c4008b05c4c',
          'name': 'Arches System Settings',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': 'fa fa-sliders',
        },{
          'maplayerid': 'fad0563b-b8f8-11e6-84a5-026d961c88e6',
          'graphid': 'fad0563b-b8f8-11e6-84a5-026d961c88e6',
          'name': 'Heritage Resource Group Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': '',
        },{
          'maplayerid': '99417385-b8fa-11e6-84a5-026d961c88e6',
          'graphid': '99417385-b8fa-11e6-84a5-026d961c88e6',
          'name': 'Heritage Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': '',
        },{
          'maplayerid': 'f5624ce7-b66c-11e6-84a5-026d961c88e6',
          'graphid': 'f5624ce7-b66c-11e6-84a5-026d961c88e6',
          'name': 'Historical Event Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': 'fa fa-calendar',
        },{
          'maplayerid': '3caf329f-b8f7-11e6-84a5-026d961c88e6',
          'graphid': '3caf329f-b8f7-11e6-84a5-026d961c88e6',
          'name': 'Information Resource Model',
          'color': '#FF0000',
          'pointsize': '3',
          'linewidth': '1',
          'icon': '',
        },],
    };
});
