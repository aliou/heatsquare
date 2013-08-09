var map = L.mapbox.map('map', 'aliou.map-jimsg0cq');

var locate_me = document.getElementById('locateme');

if (navigator.geolocation) {
  locate_me.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    map.locate();
  };
}

map.on('locationfound', function(e) {
  map.fitBounds(e.bounds);

  map.markerLayer.setGeoJSON({
    type: "Feature",
    geometry: {
      type: "Point",
    coordinates: [e.latlng.lng, e.latlng.lat]
    },
    properties: {
      'marker-color': '#000',
      'marker-symbol': 'star-stroked'
    }
  });

  // And hide the geolocation button
  locate_me.parentNode.removeChild(locate_me);
});
