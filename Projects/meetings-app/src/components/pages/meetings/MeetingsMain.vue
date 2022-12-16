<template>
  <div> 
    <app-menu /> 
    <div class="container my-4">
      <div class="body-heading">
        <h1>Meetings</h1>
        <hr />
      </div>
      <div>
        <b-tabs content-class="mt-3">
        <!--- <b-nav-item  to="/meetings">Filter/search Meetings</b-nav-item>
          <b-nav-item   to="/meetings/add">Add a meeting</b-nav-item>-->
          <b-tab title="Filter/search Meetings" active>
            <meetings-list></meetings-list>  
          </b-tab>
          <b-tab  title="Add a meeting" >
            <meetings-add></meetings-add>
        </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
import MeetingsList from '@/components/pages/meetings/MeetingsList.vue';
import MeetingsAdd from './MeetingsAdd.vue';
export default {
    name:'MeetingsMain',
    components:{
      AppMenu,
      MeetingsList,
      MeetingsAdd

    },
    data(){
      return {
         
      }
    }

}
</script>

<style scoped>

</style>MeetingsAdd