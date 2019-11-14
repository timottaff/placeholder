<template>
  <div>
    <v-btn v-on:click="addData">Add Data</v-btn>
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
    addData() {
      this.planetChartData.data.labels.push('A');
      this.planetChartData.data.datasets.forEach((dataset) => {
        dataset.data.push(50);
      });
      this.planetChartData.update();
    }
  },
  data() {
    return {
      planetChartData: planetChartData,
      number: 0,
      word: 'A' 
    };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>