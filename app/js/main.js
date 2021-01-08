// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdHomePrices = document.getElementById("chart-container-home-prices-2020");


function drawHighcharts() {
    Highcharts.chart(chartIdHomePrices, {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 7,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1wEVjd6-3oIid0OL0Hk2AX0NHq_ylu9RFRD3iQt1vuco'
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                clip: false
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            formatter: function () {
                return Highcharts.numberFormat(this.value,0,'.',',');
            },
            },
            max: 300000
            // adds commas to thousands

        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valuePrefix: '$'
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}