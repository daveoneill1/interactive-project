// check jquery loaded // 

function updateNews(dataName) {

    //Set the JSON file to load Depending on what we pass from button click, i.e. data1,data2
    let url = ""
    let label = ""
    if(dataName == 'data1'){
        url = "/data/boris-johnson-tone.json"
        label = "Boris Johnson Tone Sept to Nov (Days)"
    }
    else if(dataName == 'data2'){
        url = "/data/jeremy-corybn-tone.json"
        label = "Jeremy Corbyn Tone Sept to Nov (Days)"
    }
    else if(dataName == 'data3'){
        url = "/data/leo-varadkar-tone.json"
        label = "Leo Varadkar Tone Sept to Nov (Days)"
    }

    $.ajax({
        url: url,

        // if successful bind the data to the done method
        
      }).done(function(data) {

       
        var ctx = document.getElementById('leoChart');
        // bind data to myJSON variable // 

        var myJSON = data.timeline[0].data

        var valuesArray = []
        var datesArray = []
        $.each(myJSON, function(count,item) {

            var itemvalue = item.value
            valuesArray.push(itemvalue)
            datesArray.push(count) 
        })

    console.log(valuesArray)
        console.log(datesArray)

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: datesArray,//to show all the numbers we need to have the same amount of matching labels, in this case its the dates
            datasets: [{
                label: label,
                borderColor: '#00acee',
                data: valuesArray
            }]
        },
        // Configuration options go here
        options:  {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            drawOnChartArea: false    
                        },

                        ticks: {
                            display: false
                        }
                    
                    }
                    

                    
                ]
            }
        }
    })

        })

}

updateNews('data1') // Call the function straight away so that it populates with the first dataset




// Yemen Line Chart // 
// check jquery loaded // 

$(document).ready(function () {


    // fire ajax method, call url // 

    $.ajax({
        url: "/data/yemen-news-2-year.json",

        // if successful bind the data to the done method
    }).done(function (data) {


        var ctx = document.getElementById('myChart');
        // bind data to myJSON variable // 

        var myJSON = data.timeline[0].data

        var valuesArray = [] // creating a array for the number values
        var datesArray = [] // creating an array for the dates******************

        $.each(myJSON, function (count, item) {

            var itemvalue = item.value
            valuesArray.push(itemvalue)

            var date = item.date
            datesArray.push(date) //push the dates into the date array***************
        })

        console.log(valuesArray)


        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: datesArray,//to show all the numbers we need to have the same amount of matching labels, in this case its the dates*****
                datasets: [{
                    label: 'Coverage Volume Intensity - Keyword Yemen',
                    borderColor: 'rgb(124,181,236)',
                    


                    data: valuesArray
                }]
            },
            // Configuration options go here
            // hide x axis labels  / hide grid lines 
            options: {
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                drawOnChartArea: false    
                            },

                            ticks: {
                                display: false
                            },

                        
                        }
                        

                        
                    ]
                }
            }
        })

    })






})






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
        console.log(results)
        for (var i = 0; i < results.features.length; i++) {
            let coords = results.features[i].geometry.coordinates;

            let latLng = new google.maps.LatLng(coords[1], coords[0]);

            // add label to marker with count and country pulled from json array
            let label = results.features[i].properties.count.toString() + " Location Mentions  " + results.features[i].properties.name

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


    }
