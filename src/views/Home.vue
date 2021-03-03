<template>
  <div class="home">
    <Greeting />
    <BodyCard />
    <HowItWorks />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Greeting from '@/components/Greeting.vue'
import BodyCard from '@/components/BodyCard.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Greeting,
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
