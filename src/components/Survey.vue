<template>
  <div id="survey">
    <v-form
        ref="form"
        @submit.prevent="submit"
        class="datform"
      >
    <div v-if="step === 1">
      <h1>Hello!</h1>      
        <div >
          <v-card class="survey-card"><h2 class="card-text">Let's get you started with a free assessment</h2></v-card>
          <v-btn class=" btn mt-5 white--text" color="#0056ce" @click.prevent="next()">Continue</v-btn>
        </div>
      <p class="pagenumber"><strong>1</strong>/3</p>
    </div>
    <div v-if="step === 2">      
      <div class="radios">
        <legend class="radioTitle" for="who"><h1>Who is this assessment for?</h1></legend>
        <p class="errorMsg"  v-if="error"> Please answer all of the questions </p>
        <v-radio-group class="surveyBody"  name="who" id="who" v-model="who">
          <v-card :class="{ radioCardSelect: selected1 }" @click="select1(), clicked()" class="radioCard">
            <label>
              <v-radio
                class="radioBtn"
                value="myself">
              </v-radio>
              <strong>Myself</strong>
            </label>
          </v-card>
          <v-card :class="{ radioCardSelect: selected2 }" @click="select2(), clicked()" class="radioCard">
            <label>
              <v-radio
                class="radioBtn"
                value="child">
              </v-radio>
            <strong>My Child</strong>
          </label>
          </v-card>
          <v-card :class="{ radioCardSelect: selected3 }" @click="select3(), clicked()" class="radioCard">
            <label>
              <v-radio
                class="radioBtn"
                value="someone else">
              </v-radio>
              <strong>Someone Else</strong>
            </label>
          </v-card>
          
        </v-radio-group>    
        <v-btn :disabled="disabled" class="mt-5 white--text btn" color="#0056ce" @click.prevent="next()">Continue</v-btn>
        <p class="pagenumber"><strong>2</strong>/3</p>
      </div>
    </div>

    <div  v-if="step === 3">
      <h1>How can we contact you?</h1>
      <p class="errorMsg"  v-if="error"> Please answer all of the questions </p>
      <div class="form-frame surveyBody">
        <div class="regis">
          <label class="label" for="name">Fullname</label>
          <input class="input" @change="filledOut()" id="name" name="name" v-model="name" type="text" placeholder="Fullname" required><br> 
        </div>
        <div class="regis">
          <label class="label" for="state">State</label>
          <select class="input" @change="filledOut()" v-model="state" name="state" id="state"  required>
            <option class="placeholder" value="" selected disabled hidden>State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select><br>	 
        </div>
        <div class="regis">
          <label class="label" for="email">Email</label>
          <input class="input" @change="filledOut()" v-model="email" id="email" name="email" type="email" placeholder="Email" required><br> 
        </div>
        <div class="regis">
          <label class="label" for="phone" placeholder="Phone">Phone:</label>
          <input class="input" @change="filledOut()" v-model="phone" type="tel" id="phone" name="phone" placeholder="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required> <br>
        </div>
      </div>
      <v-btn :disabled="disabled" class="mt-5 white--text btn" color="#0056ce" @click.prevent="submit()">Submit</v-btn>
      <p class="pagenumber"><strong>3</strong>/3</p>
    </div>
    <div  v-if="step === 4">
      <h1>Thank You!</h1>
      <h2>We'll be in touch soon</h2>
      <router-link class='button-link' to="/"><v-btn class="white--text button-link" color="#0056ce">Home</v-btn></router-link>
      <v-img 
          :src="require('../assets/rocket.png')"
          class=" img"
          contain
          alt="four polygon characters un the shape of a rocket"
      />
    </div>
  </v-form>  
</div>
</template>

<script>
export default {
  name: 'Survey',
  components: {
    
  },
  data() {
    return {
      step:1,
      error: false,
      disabled: true,
      selected1: false,
      selected2: false,
      selected3: false
    }
  },  
  methods:{
    select1() {
      this.selected1 = true,
      this.selected2 = false,
      this.selected3 = false
    },
    select2() {
      this.selected1 = false,
      this.selected2 = true,
      this.selected3 = false
    },
    select3() {
      this.selected1 = false,
      this.selected2 = false,
      this.selected3 = true
    },
    clicked() {
      this.disabled = false;
    },
    filledOut() {
      if (this.name && this.email && this.state && this.phone) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    next() {
      this.disabled = true;
      this.step++;
    },
    submit() {     
      // validation
      if (!this.name || !this.email || !this.state || !this.phone) {
        this.error = true;
      } else {
      this.error = false;
      this.disabled = true;
      this.step++;

      // set up for API call
      let answers = {
        for: this.who,
        name: this.name,
        email: this.email,
        state: this.state,
        phone: this.phone
      }; 
      this.$emit(answers);
      }
    }
  }
}
</script>

<style scoped>
  /* form styles */
  .radioTitle {
    width: 100%;
  }
  .radios {
    text-align: center;
  }
  .radioCard {
    margin-bottom: 20px;
    text-align: center;
    padding-bottom: 20px;
  }
  .radioCard:hover {
    border-style: solid;
    border-color: black;
    border-width: 1px;
  }
  .radioCardSelect {
    border-style: solid;
    border-color: black;
    border-width: 1px;
    background-color: lightgray ;
  }
  .radioBtn {
    visibility: hidden;
}
  .datform {
    text-align: center;
  }
  .input {
    border-style: solid;
    border-width: 1px;
    border-color: black;
    width: 100%;
    padding-left: 5px;
  }

  .placeholder {
    color: #FFFFFF;
  }

  .regis {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 0px;
  }

  .label {
    width: 10px;
    color: gray;
    font-size: 10px;
  }

  .btn {
    width: 80%;
    
  }

  .surveyBody {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .survey-card {
    margin-top: 30px;
    margin-bottom: 30px;
    
    width: 100%;
    height: 100px;
    transform: rotate(-5deg);
  }

  .card-text {
    padding-top: 5%;
    padding-left: 10px;
    padding-right: 10px;
    /* font-family: roboto; */
  }

  #survey {
    width: 90%;
  }

  .button-link {
    margin-top: 30px;
  }

  .errorMsg {
    color: red;
    font-weight: heavy;
  }

  .pagenumber {
    margin-top: 20px;
    font-size: 30px;
  }

/* image style */
  .img {
    height: 300px;
    padding-bottom: 0;
  }
  
/* adjusting for size */
  @media only screen and (min-width: 800px) {
        #survey {
          width: 30%;
        }

        .img {
          display: none;
        }
        
    }
</style>

