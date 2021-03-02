<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld />
    <BodyCard />
    <HowItWorks />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BodyCard from '@/components/BodyCard.vue'
import HowItWorks from '@/components/HowItWorks.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BodyCard,
    HowItWorks
  }
}
</script>

<style scoped>
  .home {
    position: static;
  }
</style>
