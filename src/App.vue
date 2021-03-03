<template>
  <v-app class="app">
    
    <v-main>
      <v-col class="header" cols="12">
        <router-link to="/">
          <h1 class="polygon">Polygon</h1>
          <v-img
            :src="require('./assets/polygon.png')"
            class="my-3"
            contain
            height="150"
            alt="Polygon Logo"
          />
        </router-link>
      </v-col>    
      <div class="comps">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
};
</script>

<style> 
  h2 p h3 h1 {
    font-family: Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif;
  }
  .header {
    background-color: lightgray;
    max-height: 200px;
  }
  .v-main__wrap {
    height: auto;    
  }
  body {
    height: 100%;
  }
  .polygon {
    display: none;
  }  
</style>
