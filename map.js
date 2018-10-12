var mymap = L.map('mapid').setView([35.08, -106.6], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(mymap);

var marker = L.marker([35.08, -106.65]).addTo(mymap);

var circle = L.circle([35.098, -106.652], {
    color: '#BADA55',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [35.090, -106.59],
    [35.085, -106.68],
    [35.101, -106.66]
]).addTo(mymap);


marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br>I'm at 2nd and Coal");
circle.bindPopup("I am a circle.").openPopup();
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([35.089, -106.65])
    .setContent("I am a standalone popup.")
    .openOn(mymap);


    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
    
    mymap.on('click', onMapClick);