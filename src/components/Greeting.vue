<template>
  <v-container sytle="background-color: #DAB6FC" class="body">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-6">
          Discover your difference, harness your strengths.
        </h1>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <p class="subheading font-weight-regular">
          Tele-assessments and support for learning differences.
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <router-link class='button-link' to="/assessment"><v-btn class="white--text heavy--text" color="#0056ce">Get Started</v-btn></router-link>
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
  
</script>

<style scoped>
  .body {
    margin-bottom: 125px;
  }
  .button-link {
    text-decoration: none;
    color: white;
  }
  .thatbtn {
    color: white;
  }
</style>
