<template>
   <b-navbar class="bg-info " toggleable="lg" type="light" variant="info">
      <b-navbar-brand class="d-block d-md-block d-lg-none  " href="#">Meetings</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse font-color"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
       
        <b-nav-item to="/calendar"  exact exact-active-class="active">Calendar</b-nav-item>
        <b-nav-item to="/meetings"  exact exact-active-class="active">Meetings</b-nav-item>
        <b-nav-item to="/teams"  exact exact-active-class="active ">Teams</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text>Hello <span class="text-primary">{{this.$store.state.auth.email}}!</span></b-nav-text>
        <b-nav-item class="select"  @click.prevent="SignOut">Sign Out</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import Vue from "vue";
export default {
    name:'AppMenu',
    methods:{ 
      SignOut(){
       this.$store.dispatch('userLogout');
       this.$router.push('/');
       Vue.$toast.open({
                        message: `Successfully LoggedOut !!`,
                        type: "success",
                        position : "bottom"
                    });
        

        
      }
    }
}
</script>

<style scoped>
.bg-info {
  background-color: rgb(248,249,250) !important;
  border-bottom: 2px;
}
.active{
  background-color: rgb(30,163,186);
  font-weight: bold;

  border-bottom: 2px solid rgb(30,163,186)!important;
}

.nav-link{
  border-bottom: 2px;
  
}
.nav-link:hover {

  border-bottom: 2px solid rgb(30,163,186);
  background-color:  rgba(173, 214, 220, 0.578);

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;
} 

</style>