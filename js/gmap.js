function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(45.33072,36.45399)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = 'img/icon-map-marker.svg';
  var myLatLng = new google.maps.LatLng(45.33072, 36.45399);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
