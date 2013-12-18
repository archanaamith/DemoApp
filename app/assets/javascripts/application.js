// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs


var lon = -77.03;
var lat = 38.89;
var zoom = 10;
var maxZoom = 18;
//var popup;
var feature;
var map;
//var popup = L.popup();
// var markers = null;

function initMap(){
    map = L.map('map').setView([lat,lon], 13);
    L.tileLayer('http://{s}.tile.cloudmade.com/e8f52063035f47b1a46eb4cb6d108778/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    }).addTo(map);

    var marker = L.marker([lat,lon]).addTo(map);

    var circle = L.circle([12.97,77.57], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    marker.bindPopup("<b>Hello!!!</b>").openPopup();
    circle.bindPopup("I am a circle.");
    var popup = L.popup();

    map.on('click', onMapClick);


    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
}