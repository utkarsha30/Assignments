<template>
  <div>
    <app-menu /> 
    
    <div class="container my-4">
  <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
    <p>For more information visit website</p>
    <b-button variant="primary" href="#">More Info</b-button>
  </b-jumbotron>
</div>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
export default {
    name: 'MeetingsCalendar',
  components: {
   // MeetingsCalendar,
    AppMenu,
   // MeetingsList
  }
}
</script>

<style>

</style>