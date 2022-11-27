<template>
  <div>
    <app-menu />
    <div class="container my-4">
    
    
        <router-view></router-view>
    </div>
</div>
</template>

<script>
//import MeetingsCalendar from './components/pages/MeetingsCalendar.vue'
import AppMenu from './components/AppMenu.vue'
//import MeetingsList from './components/pages/meetings/Meetingslist.vue'

export default {
  name: 'App',
  components: {
   // MeetingsCalendar,
    AppMenu,
   // MeetingsList
  }
}
</script>

<style>

</style>
