<template>
  <div>
    <b-card   bg-variant="info"  text-variant="black">
        <b-card-title  class="title-font-color">Search for Meetings</b-card-title>
     <hr />
     <div class="card-body">
            <div class="form-group">
                <label for="meetingsDate"  class="blockquote">Date</label>
                <select name="meetingsDate" id="meetingsDate" class="custom-select  mb-3" v-model="dateSelect">
                    <option selected value="all">ALL</option>
                    <option value="past">PAST</option>
                    <option value="present">TODAY</option>
                    <option value="future">UPCOMING</option>
                </select>
            </div>
            <div class="form-group">
                <label for="meetingsDescription"  class="blockquote" >Search for</label>
                <textarea class="form-control" name="meetingsDescription" id="meetingsDescription" placeholder="Search using words which describe the meeting"></textarea>
            </div>
            <button type="submit"  class="btn btn-primary">Search</button>
     </div>
  </b-card>
  <div class="body-heading mt-4">
      <h2>Meetings matching Search Criteria</h2>
      <hr />
    </div>
    <div class="d-flex justify-content-center" v-if="loading">
        <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
        {{error.message}}
    </div>
  <div>
    <div v-if="!loading && !error && meetings.length !== 0">
        <div v-for="meeting in meetings" :key="meeting._id">
            <router-link
            :to="{ name: 'meetings-list-by-date'}"
                            exact-active-class="active"
                            class="mr-3" >
            <MeetingsListByDate :meeting="meeting" />
            </router-link>
           
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import {getMeetings} from '@/service/meetingsPath'
import MeetingsListByDate from '@/components/pages/meetings/MeetingsListByDate.vue'
export default {
    
    name: 'MeetingsList',
    components:{
        MeetingsListByDate 
     },
    data(){
        return {
            meetings:[],
            loading:false,
            error: null,
            dateSelect: 'all'
        }
    },
    methods: {
       
    },
    async mounted(){
        
        //console.log(this.dateSelect);
        this.loading = true;
        try{
            const meetings = await getMeetings();
            this.meetings = meetings;
        }
        catch(error){
            this.error = error;
        }
        finally{
            this.loading = false;
        }
    }
}
</script>

<style scoped>
.title-font-color{
    color:white;
}

</style>