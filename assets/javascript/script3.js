// News Coverage Map // 



var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(46.619261, -33.134766),
        mapTypeId: 'terrain'
    });

    // Data url 

    var script = document.createElement('script');

    script.src ="/data/rte-news-coverage-world.js";
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Using eqfeed callback to take geojson data and loop through


window.eqfeed_callback = function (results) {
    console.log(results);
    for (var i = 0; i < results.features.length; i++) {
        let coords = results.features[i].geometry.coordinates;

        let latLng = new google.maps.LatLng(coords[1], coords[0]);

        // add label to marker with count and country pulled from json array, if statement to make string plural if more than 1 location
        
          

           let label = results.features[i].properties.count.toString() + " Locations Mention  " + results.features[i].properties.name;

        if (results.features[i].properties.count > 1) {

        
            label = results.features[i].properties.count.toString() + " Location Mentions  " + results.features[i].properties.name;
        }
        

        
        

        //add marker, try and add a different style of marker
        let infowindow = new google.maps.InfoWindow({
            content: label
        });

        // marker details

        let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: label,
            icon: "http://www.codeshare.co.uk/images/blue-pin.png",
            animation: google.maps.Animation.DROP
        });

        // open info window on click

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        // click anywhere on the map to close the info window
        google.maps.event.addListener(map, 'click', function () {
            infowindow.close();
        });






    }


};