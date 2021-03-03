<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld />
    <BodyCard />
    <HowItWorks />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BodyCard from '@/components/BodyCard.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BodyCard,
    HowItWorks,
    Footer
  }
}
</script>

<style scoped>
  .home {
    position: static;
  }
</style>
