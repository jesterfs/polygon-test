<template>
  <v-app>
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
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

// export default {
//   name: 'App',

//   components: {
//     HelloWorld,
//   },

//   data: () => ({
//     //
//   }),
// };
</script>
