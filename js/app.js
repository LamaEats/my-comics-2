var map;
var center = {lat: 55.7471529, lng: 37.6441475};
var options = {
    center: center,
    zoom: 14,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: false,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
};
var pin = "images/pin.png"
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker ({
        position: center,
        map: map,
        title: "Our placement",
        icon: pin
    });
}