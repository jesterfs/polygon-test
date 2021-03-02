

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/polygon.png">
    
    
    <router-view/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <button>
        <router-link to="/about">Get Started</router-link>
      </button> -->
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background-color: black;
  color: white;
  padding: 5px;
}
</style>
