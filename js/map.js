var map = null;
var selectType = null;
var kartZoom = 12;
var kartCenter = new google.maps.LatLng(62.842065, 7.230459);
var doit;
var kartIsDraggable = false;

function gMapCenter(center, zoom) {
	map.panTo(center);
	map.setZoom(zoom);
}

function gMapInit(zoom) {
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	kartIsDraggable = w > 480 ? true : false;
	zoom = typeof zoom !== 'undefined' ? zoom : 4;
	var mapOptions = {
		zoom: zoom,
		minZoom: 3,
		center: kartCenter,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP]
		},
		mapTypeControl: false,
		disableDefaultUI: true,
		draggable: kartIsDraggable,
		scrollwheel: false,
		styles: [{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [{
					"saturation": "-100"
				}]
			},
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [{
					"saturation": "-100"
				}]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [{
					"visibility": "simplified"
				}]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [{
					"lightness": "30"
				}]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [{
					"lightness": "40"
				}]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		]
	};
	var mapElement = document.getElementById('map');
	map = new google.maps.Map(mapElement, mapOptions);

	var marker_icon = {
		url: 'img/icons/map-marker.png',
		origin: new google.maps.Point(0, 0),
		anchor: new google.maps.Point(23, 55),
		scaledSize: new google.maps.Size(25, 30)
	};

	var plasser = [
		["Sylteosen Betong", 62.842114, 7.230269, 1, "<b>Sylteosen Betong</b><br/>Myrbostadvegen 351<br/>6440 Elnesvågen"]
	];

	setMarkers(map, plasser);
	infowindow = new google.maps.InfoWindow({
		content: "Laster inn..."
	});

	function setMarkers(map, markers) {
		for (var i = 0; i < markers.length; i++) {
			var sites = markers[i];
			if (selectType == null || selectType == '' || selectType == sites[6]) {
				var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
				var marker = new google.maps.Marker({
					position: siteLatLng,
					map: map,
					title: sites[0],
					zIndex: sites[3],
					html: sites[4],
					icon: marker_icon
				});
				var contentString = "Innhold";
				google.maps.event.addListener(marker, "click", function() {
					//console.log("Click marker");
					infowindow.setContent(this.html);
					infowindow.open(map, this);
					if (map.getZoom() < 16) {
						kartZoom = 16;
					} else {
						kartZoom = map.getZoom();
					}
					//kartCenter = this.getPosition();
					var kartCenterLat = this.getPosition().lat();
					var kartCenterLng = this.getPosition().lng() + 0.001;
					kartCenter = new google.maps.LatLng(
						kartCenterLat,
						kartCenterLng
					);

					gMapCenter(kartCenter, kartZoom);
				});
			}
		}
	}
}

$(document).ready(function() {
	gMapInit(kartZoom);
});

$(window).resize(function() {
	clearTimeout(doit);
	doit = setTimeout(function() {
		gMapCenter(kartCenter, kartZoom);
	}, 200);
});
