<template>
  <v-card>
    <v-toolbar
      color="purple"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
          slider-color="white"
          background-color="transparent"
        >
          <v-tab
            v-for="i in 4"
            :key="i"
            :href="`#tab-${i}`"
            v-text="tab[i-1]"
          >
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 4"
        :key="i"
        :value="`tab-${i}`"
      >
        <v-card flat>
          <v-card-text v-text="text[i-1]"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: ['Menu', 'Golden', 'Experience', 'Requiem'],
        model: 'tab-1',
        text: ['Lorem ipsum dolor sit amet', 'Kono Giorno Giovanna ni wa Yume ga Aru', 'Bnagsat', 'Ini ke 4']
      }
    },
  }
</script>