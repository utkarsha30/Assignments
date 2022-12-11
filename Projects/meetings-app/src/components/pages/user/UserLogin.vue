<template>
  <div class="container my-5 "> 
    <HourGlassLoading v-if="loading"></HourGlassLoading>
    <b-card v-if="!loading" title="Sign in" class="card mx-auto  text-center p-4">
      <b-form @submit.prevent="onSubmit">
        <b-form-group class="mb-4 mt-4">
        <b-form-input
          id="userEmail"
          type="email"
          v-model.trim="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group class="mb-4">
        <b-form-input
          id="userPassword"
          type="password"
          v-model.trim="password"
          placeholder="Enter Password"
          required
        ></b-form-input>
                        
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
    <div v-if="!loading"> 
      For Easy asscess:
    Email : kshirsagar@gmail.com <br/>
    Password : Ukshirsagar@2
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import HourGlassLoading from "../HourGlassLoading.vue";
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
    methods:{
      // notify(){
      //   Sucess
      //   Vue.$toast.open({
      //                   message: `Successfully logged in!!`,
      //                   type: "success",
      //                   position : "bottom"
      //               });
     
      //   for error
      //   Vue.$toast.open({
      //   message: 'Something went wrong!',
      //   type: 'error',
      //   });
      // }
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