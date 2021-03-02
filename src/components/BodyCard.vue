<template>
  <div class="body">
        <div>
            <v-card
            class="d-flex justify-start mb-6"
            >
                <v-card class="square">
                    Flex item 1
                </v-card>
                <v-card class="square">
                    Flex item 1
                </v-card>
                <v-card class="square">
                    Flex item 1
                </v-card>
            </v-card>
        </div>
        <div>
            <button>
                <router-link to="/about">Get Started</router-link>
            </button>
        </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
  text-decoration: none;
}

button {
  background-color: black;
  color: white;
  padding: 5px;
}

.body {
    background-color: black;
    width: 100%;
    margin: 0;
    height: 500px;
}

.square {
    background-color: white;
    margin: 10px;
    
}
</style>
