var Script = function () {


    var barChartData = {
        labels : ["Quiz 1","Quiz 2","Quiz 3","Assessment 1","Quiz 4","Assignment 1","Model Quiz"],
        datasets : [
            //Grey bars refer to average grade of the class
			{
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                data : [70,52,69,65,56,55,52]
            },
            //Blue bars refer to this particular grade of the student
			{
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                data : [85,50,60,45,32,62,100]
            }
        ]

    };
 
    //new Chart(document.getElementById("doughnut").getContext("2d")).Doughnut(doughnutData);
    //new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);
    //new Chart(document.getElementById("radar").getContext("2d")).Radar(radarChartData);
    //new Chart(document.getElementById("polarArea").getContext("2d")).PolarArea(chartData);
    new Chart(document.getElementById("bar").getContext("2d")).Bar(barChartData);
    //new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData);


}();