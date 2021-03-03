<template>
    <div class="body">
        <v-container class="body-box">
            <h2>How It Works</h2>
            <v-expansion-panels class="panels">
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        1. Consultation and Intake
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        In your complimentary consultation, a referral specialist will answer all your questions. If you’re a good fit for an assessment, we’ll get a full history and schedule your appointment.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        2. Tele-assessment
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Meet your psychologist from the comfort of your home. Our licensed PhD/PsyD psychologists have years of experience and use widely-accepted, gold-standard assessment procedures.                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        3. Report within a week
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Your report — with an official diagnosis and tailored recommendations — is valid for eligibility determinations for an IEP, testing accommodations, and other services.                
                        
                    </v-expansion-panel-content>
               </v-expansion-panel>
               <v-expansion-panel>
                    <v-expansion-panel-header>
                        4. Follow-up support                    
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        After your assessment, book ongoing appointments. Your psychologist can help with general support and, if needed, school IEP and learning plan advocacy sessions.                
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        
        </v-container>
        
        <v-img 
                        :src="require('../assets/fourfriends.png')"
                        class="my-3 img"
                        contain
                        
                    />
        <router-link class='button-link' to="/about"><v-btn class="white--text" color="#4E86D9">Get Started</v-btn></router-link>
    </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

.body {
    background-color: white;
    width: 100%;
    height: 200px;
    position: relative;
    top: 1950px;
    padding-top: 20px;
    text-align: center;
}

.bodybox {
    width: 100%;
}

h2 {
    font-size: 40px;
}

.img {
    height: 400px;
    position: relative;
    top: -160px;
    left: 25%;
    visibility: hidden;
}

.button-link {
    top: -400px;
    position: relative;
}


@media only screen and (min-width: 800px) {
        .body {
            top: 1120px;
            padding-top: 10px;
        }

        .bodybox {
            width: 50%;
        }

        .panels {
            width: 50%;
            margin-left: 25%;
            margin-right: 25%;
        }

        .img {
            visibility: visible;
        }
    }


</style>
