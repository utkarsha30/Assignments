<template>
  <div>
    <b-card class="extra-css"  bg-variant="info"  text-variant="black">
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
            <button type="submit" @click="filter(dateSelect)" class="btn btn-primary">Search</button>
     </div>
  </b-card>
  <div class="body-heading mt-4">
      <h2>Meetings matching Search Criteria</h2>
      <hr />
    </div>
    <div class="d-flex justify-content-center" v-if="loading">
        <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
        {{error.message}}
    </div>

    <div v-if="!loading && !error && meetings.length !== 0">
        <div v-for="meeting in meetings" :key="meeting._id">
            <meetings-card :meeting="meeting"> </meetings-card>
        
        </div>
    </div>
  
  </div>
</template>

<script>
import {getMeetings} from '@/service/meeting'
import MeetingsCard from './MeetingsCard.vue'
//import MeetingsListByDate from '@/components/pages/meetings/MeetingsListByDate.vue'
export default {
    name: 'MeetingsList',
     components:{
       MeetingsCard 
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
       async filter(dateSelect){
            console.log(dateSelect);
            try{
                const meetings = await getMeetings(dateSelect);
                this.meetings = meetings;
            }
            catch(error){
                this.error = error;
            }
            finally{
                this.loading = false;
            }
       },
      /* async updateMeeting( meeting ) {
            this.meetings.push( meeting );
        }*/
    },
    async mounted(){
        
        console.log(this.dateSelect);
        this.loading = true;
        try{
            const meetings = await getMeetings(this.dateSelect);
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
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    background-image: linear-gradient(to bottom, rgb(23,162,184), rgb(174, 195, 228));
}

</style>