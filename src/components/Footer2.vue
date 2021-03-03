<template>
  <div class="body2">
    <v-row class="footer">
        <div>
            <p>Copyright © 2021 Polygon Technologies, Inc.</p>
        </div>
        <div>
            <p>contact@hellopolygon.com
                <v-icon
                small
                color="white"
            >
                mdi-email
            </v-icon>
            </p>
            
        </div>

    </v-row>
    <!-- <v-img 
                        :src="require('../assets/footerfella.png')"
                        class=" footerimg"
                        contain
                        
                    /> -->
  </div>
</template>

<script>
  
</script>

<style scoped>
  .body2 {
    margin: 0;
    /* margin-bottom: -200px; */
    height: 150px;
    
    /* position: static; */
    position: relative;
    top: 162px;
    background-color: black;
    color: white;
    width: 100%;
  }
  .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      padding-top: 10px;
  }
  

  .footerimg {
      position: relative;
      top: 0px;
      height: 100px;
      opacity: 0.60;
      margin-bottom: 0 !important;
  }

  @media only screen and (min-width: 800px) {
        .body2 {
            top: 305px;
            height: 100px;
        }
        .footerimg {
            top: -60px;
            height: 80px;
            visibility: hidden;
        }
        .footer {
            padding-top: 30px;
            height: 20px;
        }
    }
</style>
