var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MainParks_1 = new ol.format.GeoJSON();
var features_MainParks_1 = format_MainParks_1.readFeatures(json_MainParks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainParks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainParks_1.addFeatures(features_MainParks_1);
var lyr_MainParks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainParks_1, 
                style: style_MainParks_1,
                popuplayertitle: "Main Parks",
                interactive: true,
                title: '<img src="styles/legend/MainParks_1.png" /> Main Parks'
            });
var format_PrivateLibraries_2 = new ol.format.GeoJSON();
var features_PrivateLibraries_2 = format_PrivateLibraries_2.readFeatures(json_PrivateLibraries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateLibraries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateLibraries_2.addFeatures(features_PrivateLibraries_2);
var lyr_PrivateLibraries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateLibraries_2, 
                style: style_PrivateLibraries_2,
                popuplayertitle: "Private Libraries",
                interactive: true,
                title: '<img src="styles/legend/PrivateLibraries_2.png" /> Private Libraries'
            });
var format_PublicLibraries_3 = new ol.format.GeoJSON();
var features_PublicLibraries_3 = format_PublicLibraries_3.readFeatures(json_PublicLibraries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicLibraries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicLibraries_3.addFeatures(features_PublicLibraries_3);
var lyr_PublicLibraries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicLibraries_3, 
                style: style_PublicLibraries_3,
                popuplayertitle: "Public Libraries",
                interactive: true,
                title: '<img src="styles/legend/PublicLibraries_3.png" /> Public Libraries'
            });
var format_heritage_sites_4 = new ol.format.GeoJSON();
var features_heritage_sites_4 = format_heritage_sites_4.readFeatures(json_heritage_sites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heritage_sites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heritage_sites_4.addFeatures(features_heritage_sites_4);
var lyr_heritage_sites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heritage_sites_4, 
                style: style_heritage_sites_4,
                popuplayertitle: "heritage_sites",
                interactive: true,
                title: '<img src="styles/legend/heritage_sites_4.png" /> heritage_sites'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MainParks_1.setVisible(true);lyr_PrivateLibraries_2.setVisible(true);lyr_PublicLibraries_3.setVisible(true);lyr_heritage_sites_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MainParks_1,lyr_PrivateLibraries_2,lyr_PublicLibraries_3,lyr_heritage_sites_4];
lyr_MainParks_1.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_PrivateLibraries_2.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_PublicLibraries_3.set('fieldAliases', {'NAME': 'NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_heritage_sites_4.set('fieldAliases', {'Place': 'Place', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MainParks_1.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_PrivateLibraries_2.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_PublicLibraries_3.set('fieldImages', {'NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_heritage_sites_4.set('fieldImages', {'Place': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MainParks_1.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_PrivateLibraries_2.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_PublicLibraries_3.set('fieldLabels', {'NAME': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_heritage_sites_4.set('fieldLabels', {'Place': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_heritage_sites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});