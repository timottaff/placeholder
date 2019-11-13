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
    randomGeneratorNumber() {
      this.number = this.number + 60;
      if (this.number>200){
        this.number = 0;
      }
    },
    randomGeneratorWord() {
      this.word = this.word + 'A';
      if (this.word == 'AAAA'){
        this.word = 'A'
      }
    },
    addData() {
      this.planetChartData.data.labels.push('A');
      this.planetChartData.data.datasets.forEach((dataset) => {
        dataset.data.push(this.randomGeneratorNumber());
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