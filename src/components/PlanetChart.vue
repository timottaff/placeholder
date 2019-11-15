<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chart-data.js";

export default {
  name: "planet-chart",
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
    fetchData() {
      let self = this;
      let url = "https://api.myjson.com/bins/1bs6su";
      let i = 0;
      fetch(url)
        .then(response => response.json())
        .then(dataUrl => {
          while (i<2){
            self.planetChartData.data.datasets[i].data = dataUrl[i];
            i++;
          }
        });
    }
  },
  data() {
    return {
      planetChartData: planetChartData
    };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
    this.fetchData();
  }
};
</script>