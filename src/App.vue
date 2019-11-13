<template>
  <v-app>
    <VHeader />

    <v-content>
      <Header />
      <QuestionBox />
      <PlanetChart />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
import PlanetChart from "./components/PlanetChart.vue";
import VHeader from "./components/VHeader.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
    PlanetChart,
    VHeader
  }
};
</script>
