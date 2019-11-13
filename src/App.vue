<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <span class="mr-2">Song Here</span>
      </v-btn>
    </v-app-bar>

    <v-content>     
      <Header />
      <QuestionBox />
      <PlanetChart />
      <PlanetChartInput />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
import PlanetChart from "./components/PlanetChart.vue";
import PlanetChartInput from "./components/PlanetChartInput.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
    PlanetChart,
    PlanetChartInput
  }, 
};
</script>
