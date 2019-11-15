export const planetChartData = {
  type: 'line',
  data: {
    labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    datasets: [
      { // one line graph
        label: 'Number of Moons',
        data: [],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
        ],
        borderColor: [
          '#36495d',
        ],
        borderWidth: 3
      },
      { // another line graph
        label: 'Planet Mass (x1,000 km)',
        data: [],
        backgroundColor: [
          'rgba(71, 183,132,.5)', // Green
        ],
        borderColor: [
          '#47b784',
        ],
        borderWidth: 3
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

export default planetChartData;