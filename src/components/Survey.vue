


<template>
  <div id="survey">
  <v-form
      ref="form"
      @submit.prevent="submit"
      class="datform"
    >
  <div v-if="step === 1">

    <h1>Hello!</h1>
    
    <v-card class="survey-card"><h2 class="card-text">Let's get you started with a free assessment</h2></v-card>
    

    <v-btn class=" btn mt-5 white--text" color="#4E86D9" @click.prevent="next()">Continue</v-btn>
    
  </div>

  <div v-if="step === 2">
    
    <div class="radios">
    <legend for="who"><h1>Who is this assessment for?</h1></legend>
    <v-radio-group v-model="radioGroup">
      <v-radio
        label="Myself"
        value="myself">
      </v-radio>
      <v-radio
        label="My Child"
        value="child">
      </v-radio>
      <v-radio
        label="Someone Else"
        value="someone else">
      </v-radio>
    </v-radio-group>
    

   
    <v-btn class="mt-5 white--text btn" color="#4E86D9" @click.prevent="next()">Continue</v-btn>
    </div>
  </div>

  <div  v-if="step === 3">
    <h1>How can we contact you?</h1>
    <div class="form-frame">
      <div class="regis">
        <label class="label" for="name">Fullname</label>
        <input class="input" id="name" name="name" type="text" placeholder="Fullname" required><br> 
      </div>
      <div class="regis">
        <label class="label" for="state">State</label>
        <select class="input" name="state" id="state"  required>
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
        <input class="input" id="email" name="email" type="email" placeholder="Email" required><br> 
      </div>
      <div class="regis">
        <label class="label" for="phone" placeholder="Phone">Phone:</label>

        <input class="input" type="tel" id="phone" name="phone" placeholder="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required> <br>
      </div>
    </div>
    
    
    
    

    <v-btn class="mt-5 white--text btn" color="#4E86D9" @click.prevent="submit()">Submit</v-btn>
    
  </div>
  <div  v-if="step === 4">
    <h1>Thank You!</h1>
    <h2>We'll be in touch soon</h2>
    <router-link class='button-link' to="/"><v-btn class="white--text button-link" color="#4E86D9">Home</v-btn></router-link>
    <v-img 
                          :src="require('../assets/rocket.png')"
                          class=" img"
                          contain
                          
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
      
    }
  },  
  methods:{
    next() {
      this.step++;
    },
    submit() {
      this.step++;
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


</script>

<style scoped>
  
  .img {
    height: 300px;
    padding-bottom: 0;
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
    width: 100%;
    
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

  @media only screen and (min-width: 800px) {
        #survey {
          width: 30%;
        }

        .img {
          display: none;
        }
        
    }
</style>

