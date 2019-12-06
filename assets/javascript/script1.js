$(document).ready(function () {


    // fire ajax method, call url // 

    $.ajax({
        url: "/data/yemen-news-2-year.json",

        // if successful bind the data to the done method
    }).done(function (data) {



        let ctx = document.getElementById('myChart');
        // bind data to myJSON variable // 

        let myJSON = data.timeline[0].data;

        let valuesArray = [] ;
        let datesArray = [] ;

        $.each(myJSON, function (count, item) {

            let itemvalue = item.value;
            valuesArray.push(itemvalue);

            let date = item.date;
            datesArray.push(date) ;
        });

        console.log(valuesArray);
    


        let chart = new Chart(ctx, {
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

                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Coverage Intensity'
                            }
                        }

                    ],

            
        
                
                


                    xAxes: [
                        {
                            gridLines: {
                                drawOnChartArea: false
                            },

                            scaleLabel: {
                                display: true,
                                labelString: 'Date '
                            },

                            ticks: {
                                display: false
                            },




                        }

                    ]




                }

            }

        });


    });







});




