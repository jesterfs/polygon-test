<template>
  <div>
    <v-container class="about">     
      <v-row class="question-frame">
          <div>
            <v-img 
              :src="require('../assets/lookright.png')"
              class="my-3 img"
              contain
              alt="Smiling pentagon character"
            />
          </div>
          <Survey />
          <div>
            <v-img 
              :src="require('../assets/lookleft.png')"
              class="my-3 img"
              contain
              alt="Smiling triangle character"
            />
          </div>
      </v-row>     
    </v-container>
    <Footer2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Survey from '@/components/Survey.vue'
import Footer2 from '@/components/Footer2.vue'

export default {
  name: 'Assessment',
  components: {
    Survey,
    Footer2
  },
}
</script>

<style scoped> 
  .about {
    width: 100%;    
  }
  .question-frame {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .question {
    text-align: center;
  }
  .img {
    width: 200px;
    display: none;
    position: relative;
    top: 200px;
  }
  @media only screen and (min-width: 800px) {
      .img {
        display: inline-flex;
      }
      .about {
        width: 80%;
      }       
    }  
</style>
