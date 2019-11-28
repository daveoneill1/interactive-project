// check jquery loaded // 

$(document).ready(function () {


    // fire ajax method, call url // 

    $.ajax({
        url: "/assets/json/yemen-news-2-year.json",

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
                    label: 'Coverage Volume Intensity',
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
                            }
                        
                        }
                        

                        
                    ]
                }
            }
        })

    })






})