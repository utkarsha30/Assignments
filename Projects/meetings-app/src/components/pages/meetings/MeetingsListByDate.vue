<template>
  <div>
{{dateSelect}}
    <div class="d-flex justify-content-center" v-if="loading">
        <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
        {{error.message}}
    </div>
    <div v-if="!loading && !error && meetings.length !== 0">
        <b-card  class="mb-3" v-for="meeting in meetings" :key="meeting._id">
            <b-card-title>{{meeting.name}} <span class="small">{{meeting.startTime.hours}} : {{meeting.startTime.minutes}} - {{meeting.endTime.hours}}: {{meeting.endTime.minutes}} </span></b-card-title>
            <b-card-sub-title >{{meeting.description}}</b-card-sub-title>
            <b-button variant="danger" class="mt-3">Excuse yourself</b-button>
            <hr />
            <p><span class="font-weight-bold">Attendees :</span><span v-for="attendee in meeting.attendees" :key="attendee.userId"> {{attendee.email}}</span></p>
            <div>
                <select name="meetingsMembers" id="meetingsMembers" class="custom-select w-25">
                        <option selected value="">Select Members</option>
                        <option value="past">PAST</option>
                        <option value="today">TODAY</option>
                        <option value="upcoming">UPCOMING</option>
                    </select>
                <button class="btn btn-primary ml-2" >Add</button>
            </div>
        </b-card>
    </div>
  </div>
</template>

<script>
import {getMeetings} from '@/service/meetingsPath'
export default {
    name: 'MeetingsListByDate',
    props:{
        filter: {
            type: Function,
            default: () => {}
        },
        dateSelect : {
            type: String,
            required : true
        }, 
       
    },
    data(){
        return{
            meetings:[],
            loading:false,
            error: null
        }
    },
    methods: {
       
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

<style>


</style>