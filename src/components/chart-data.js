export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [
      {
        label: null,
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 0
      },
      {
        label: null,
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 0
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25,
        }
      }]
    }
  }
}

let url = "https://api.myjson.com/bins/14lxqe";
let i = 0;
fetch(url)
  .then(response => response.json())
  .then(data => {
    while (i<2){
    planetChartData.data.datasets[i].label = data.datasets[i].label;
    planetChartData.data.datasets[i].data = data.datasets[i].data;
    planetChartData.data.datasets[i].backgroundColor = data.datasets[i].backgroundColor;
    planetChartData.data.datasets[i].borderColor = data.datasets[i].borderColor;
    planetChartData.data.datasets[i].borderWidth = data.datasets[i].borderWidth;
    i++;
    }
  });


export default planetChartData;