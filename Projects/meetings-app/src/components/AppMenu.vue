<template>
   <b-navbar class="bg-info" toggleable="lg" type="light" variant="info">
      <b-navbar-brand class="d-block d-md-block d-lg-none " href="#">Meetings</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse font-color"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       
        <b-nav-item to="/">Calendar</b-nav-item>
        <b-nav-item to="/meetings" >Meetings</b-nav-item>
        <b-nav-item href="/teams" >Teams</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-text>Hello janedoe@gmail.com</b-nav-text>
        <b-nav-item href="#" >Sign Out</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name:'AppMenu'
}
</script>

<style scoped>
.bg-info {
  background-color: rgb(248,249,250) !important;
}

</style>