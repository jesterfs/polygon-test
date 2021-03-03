<template>
    <div class="bigwrap">
    <div class="circle">
        
    </div>
      <div class="body">
        
        <v-container class="curve" >
            <v-row class="text-center">

                <v-row class="cardboxes align-center mb-4 ">
                    <v-card class="box rounded-xl" outlined elevation="5"> 
                        <v-container class="servicehead">
                            <h2>Learning differences assessment</h2>
                        </v-container>
                        <v-container class="servicedisc">
                            <p>Comprehensive assessment for dyslexia, dyscalculia, and other learning differences in reading, math, and writing</p>
                        </v-container>
                        <hr>
                        <v-container class="service-list">
                            <v-list-item>Licensed PhD/PsyD psychologist</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>DSM-5 diagnosis</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>Report within a week</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>Optional giftedness report (+$95)</v-list-item>
                        </v-container>
                    </v-card>
                    <v-card class="box rounded-xl" outlined elevation="5"> 
                        <v-container class="servicehead">
                            <h2>Attention differences assessment</h2>
                        </v-container>
                        <v-container class="servicedisc">
                            <p>Comprehensive assessment for ADHD. Available as an add-on to a specific learning differences assessment.</p>
                        </v-container>
                        <hr>
                        <v-container class="service-list">
                            <v-list-item>Same features as a learning differences assessment</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>Conducted as a separate sittin</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>Can be combined with your learning differences report retrospectively</v-list-item>
                            
                        </v-container>
                    </v-card>
                    <v-card class="box rounded-xl" outlined elevation="5"> 
                        <v-container class="servicehead">
                            <h2>Follow-up support</h2>
                        </v-container>
                        <v-container class="servicedisc">
                            <p>Ongoing support appointments with your psychologist. Available as an assessment add-on.</p>
                        </v-container>
                        <hr>
                        <v-container class="service-list">
                            <v-list-item>50-minute session with your psychologist</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>General follow-up appointments</v-list-item>
                            <v-divider class="light"></v-divider>
                            <v-list-item>School IEP and learning plan advocacy</v-list-item>
                            
                        </v-container>
                    </v-card>
                </v-row>


                <v-col
                    class="mb-5 "
                    cols="12"
                >
                    <v-container class="bodybox">
                    <h2 class="body-text body-head">Who's it for?</h2>  
                    <h3 class="body-text">An assessment with a Polygon psychologist is appropriate for anyone age 8 or older.</h3>  
                    <p class="body-text body-p">As soon as you suspect a learning or attention difference, you should consider an assessment. Interventions are most successful when learning differences are diagnosed early in life. Still, an evaluation at any age can be an important step toward receiving proper support.</p>  

                    </v-container>
                    <router-link class='button-link' to="/about"><v-btn class="white--text" color="#0056ce">Get Started</v-btn></router-link>
                
                </v-col>   

                <v-col>
                    <v-img
                        :src="require('../assets/lildude.png')"
                        class="my-3"
                        contain
                        height="300"
                        alt="Smiling hexagon creature surrounded by a speech bubble, piece of paper, camera, and calendar"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bigwrap {
    margin-top: 20px;
}
.body {
    margin-top: -50px;
}

.circle {
    border-radius: 50%;
    width: 100%;
    background-color: black;
    height: 100px;
    position: relative;
    top: 0px;
}
h2 {
    font-size: 20px;
}
h3 {
  font-size: 20px;
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

.wrapper {
    width: 50%;
    overflow: hidden
}
.body {
    background-color: black;
    position: absolute; 
    width: 100%;
    /* padding-left: 15px; */
  
    /* transition: border-top-left-radius 1s ease-in; */
    /* border-radius: 40% 40% 0 0; */
    
}



.cardboxes {
    /* max-width: 50%; */
    
    margin-right: 5%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: -50px;
}

.box {
    width: 80%;
    height: 400px;
    margin-bottom: 20px;
    
}

.servicehead {
    height: 15%;
}

.servicedisc {
    height: 30%;
}

.service-list {
    list-style-type: disc;
    text-align: left;
    height: 55%;
}

.light {
    margin-right: 20%;
    margin-left: 20%;
}




.body-text {
    color: white;
}

.body-head {
    font-size: 40px;
}

.body-p {
    font-style: italic;
    margin-top: 10px;
}

.bodybox {
    width: 100%;
}



@media only screen and (min-width: 800px) {
        .cardboxes {
            flex-direction: row;
        }
        .box {
            width: 30%;
        }
        .bodybox {
            width: 50%;
        }
    }


</style>
