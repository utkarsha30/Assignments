<template>
  <div>
        <b-card  class="mb-3" >
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
  
</template>

<script>
export default {
    name: 'MeetingsCard',
    props:{
        meeting:{
            type:Object,
            required : true
        }  
    }   
}
</script>

<style>


</style>