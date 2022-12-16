<template>
  <div class="container my-5 "> 
    <HourGlassLoading v-if="loading"></HourGlassLoading>
    <b-card v-if="!loading" title="Sign in" class="card mx-auto  text-center p-4">
      <b-form @submit.prevent="onSubmit">
        <b-form-group class="mb-4 mt-4">
        <b-form-input
          id="userEmail"
          type="email"
          v-model.trim="$v.email.$model"
          placeholder="Enter Email"
          @blur="$v.email.$touch()"
          :class="{
            'is-invalid': shouldAppendErrorClass($v.email),
            'is-valid': shouldAppendValidClass($v.email)
          }"
        >
        </b-form-input>
          <div v-if="$v.email.$error">
            <div v-if="!$v.email.required" class="error-message">
              <small class="float-left text-danger">The email field is required</small>
            </div>
            <div v-if="!$v.email.email" class="error-message">
              <small class="float-left text-danger">Invalid email address</small>
            </div>
        </div>
        </b-form-group>

        <b-form-group class="mb-4">
        <b-form-input
          id="userPassword"
          type="password"
          v-model.trim="$v.password.$model"
          placeholder="Enter Password"
          @blur="$v.password.$touch()"
          :class="{
            'is-invalid': shouldAppendErrorClass($v.password),
            'is-valid': shouldAppendValidClass($v.password)
          }"
        ></b-form-input>
        <div v-if="$v.password.$error">
          <div v-if="!$v.password.required" class="error-message">
            <small class="float-left text-danger">The password field is required</small>
          </div>
          <div v-if="!$v.password.minLength" class="error-message">
            <small class="float-left text-danger">The password must have at least 8 characters</small>
          </div>
          <div v-if="!$v.password.containsUppercase" class="error-message">
            <small class="float-left text-danger">The password must have at least 1 uppercase character</small>
          </div>
          <div v-if="!$v.password.containsLowercase" class="error-message">
            <small class="float-left text-danger">The password must have at least 1 lowercase character</small>
          </div>
          <div v-if="!$v.password.containsNumber" class="error-message">
            <small class="float-left text-danger">The password must have at least 1 digit</small>
          </div>
          <div v-if="!$v.password.containsSpecial" class="error-message">
            <small class="float-left text-danger">The password must have at least 1 special character</small>
          </div>     
        </div>         
        </b-form-group>
        <b-form-group class="mb-4">
          <b-card-text class="text-justify"><b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox></b-card-text>
          <b-button type="submit"  class="w-100 signin-btn" variant="primary">Sign in</b-button>
        </b-form-group>
        <b-form-group>
          <b-card-text class="text-justify">
            Dont have an account ? <b-link to="/register">Sign up here</b-link>
          </b-card-text>
        </b-form-group>
      </b-form>
    </b-card>
    <div v-if="!loading" class="text-muted container my-5 "> 
      <div>
        <small><strong>NOTE</strong></small>
      </div>
      <div>
        <small>Email : kshirsagar@gmail.com</small>
      </div>
      <div>
        <small> Password : Ukshirsagar@2</small>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import HourGlassLoading from "../HourGlassLoading.vue";
import { email, required, minLength } from 'vuelidate/lib/validators';
//import {userLogin} from '@/service/user'
export default {
    name: 'UserLogin',
    components:{
      HourGlassLoading
    },
    data(){
        return{
          email: '',
          password: '',
          loading:false,
            error: null,
        }
    },
    validations: {
                email: {
                    email,
                    required
                },
                password: {
                    required,
                    minLength: minLength( 8 ),
                    // https://stackoverflow.com/questions/61176720/how-to-validate-password-with-vuelidate
                    containsUppercase: function(value) {
                        return /[A-Z]/.test(value)
                    },
                    containsLowercase: function(value) {
                        return /[a-z]/.test(value)
                    },
                    containsNumber: function(value) {
                        return /[0-9]/.test(value)
                    },
                    containsSpecial: function(value) {
                        return /[#?!@$%^&*-]/.test(value)
                    }
                }
        },
    methods:{
      async onSubmit(){
       const loginDetails={
          email : this.email,
          password : this.password
        }
        this.loading = true;
      
        try{
          const login = await this.$store.dispatch('userLogin',loginDetails);
        console.log("Login",login);
         console.log("type",typeof(this.$store.state.auth.message));
     
          Vue.$toast.open({
                        message: `${this.$store.state.auth.message}`,
                        type: "success",
                        position : "bottom"
                        
                    });
                    this.$router.push('/calendar');

        }
        catch(error){ 
          Vue.$toast.open({
        message: error.message,
        type: "error",
        position : "bottom"
        });
        }
        finally{
          this.loading = false;
        }
      },
      shouldAppendValidClass( field ) {
                return !field.$invalid && field.$model && field.$dirty;
            },
            shouldAppendErrorClass( field ) {
                return field.$error;
            }
    }
}
</script>

<style scoped>
.card{
  width:60%;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  background-image: linear-gradient(to bottom, rgb(161, 183, 187), rgb(198, 220, 224));

}
 .card:hover {
  box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
  transition: all 0.3s ease;
}
.signin-btn:hover{
  text-decoration:none;
  font-weight: bold;
} 

/* for loading  */



</style>