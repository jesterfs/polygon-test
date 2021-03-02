<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld />
    <BodyCard />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BodyCard from '@/components/BodyCard.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BodyCard
  }
}
</script>
