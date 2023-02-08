<template>
    <div class="body">
        <v-row class="footer">
            <div>
                <p>Copyright © 2021 Doyglon Technologies, Inc.</p>
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
        <v-img 
            :src="require('../assets/footerfella.png')"
            class=" footerimg"
            contain
            alt="smiling triangle character standing on pile of books"           
        />
    </div>
</template>

<style scoped>
    .body {
        margin: 0;
        height: 200px;
        position: relative;
        top: 2350px;
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
        .body {
            top: 1610px;
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
