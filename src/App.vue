<template>
  <v-app class="app">
    <v-col cols="12">
        <router-link to="/">
          <v-img
            :src="require('./assets/polygon.png')"
            class="my-3"
            contain
            height="150"
          />
        </router-link>
    </v-col>
    
    <v-main>
      <div class="comps">
        <router-view></router-view>
      </div>
      <div class="comps">
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style> 
  .comps {
    position: static;
  }

  
</style>
