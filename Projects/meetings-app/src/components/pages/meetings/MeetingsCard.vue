<template>
  <div>
        <b-card  class="mb-3 extra-css" >
            <b-card-title>{{meeting.name}} <span class="small">{{meeting.startTime.hours}} : {{meeting.startTime.minutes}} - {{meeting.endTime.hours}}: {{meeting.endTime.minutes}} </span></b-card-title>
            <b-card-sub-title >{{meeting.description}}</b-card-sub-title>
            <b-button variant="danger" @click.prevent="excuse(meeting._id,index)" class="mt-3">Excuse yourself</b-button>
            <hr />
            <p><span class="font-weight-bold">Attendees :</span><span v-for="attendee in this.meetingMembers" :key="attendee.userId"> {{attendee.email}}</span></p>
            <div>
                <select name="meetingsMembers" v-model="selectedMember" id="meetingsMembers" class="custom-select w-25">
                        <option selected value="">Select Members</option>
                        <option v-for="member in members" :key="member.email" :value="member._id">{{member.email}}</option>
                    </select>
                <button  @click.prevent="addMemberToTeam(meeting._id,selectedMember)" class="btn btn-primary ml-2" >Add</button>
            </div>
        </b-card>
    </div>
  
</template>

<script>
import {excuseFromMeeting,addAttendee} from '@/service/meeting';

import Vue from "vue";
export default {
    name: 'MeetingsCard',
    data(){
        return{
            meetingMembers: this.meeting.attendees,
            selectedMember:''
        }
    },
    props:{
        index:{
            type:Number,
            required : true
        },
        members:{
            type:Array,
            required : true
        },
        meeting:{
            type:Object,
            required : true
        },
        updateMeetings:{
            type: Function,
            default: () => {}
        }
    },
    methods:{
        async addMemberToTeam(id,selectedMember){
            const check = this.meetingMembers.filter(attendee=>attendee.userId === selectedMember);
          if(check.length !==0)
          {
            Vue.$toast.open({
                        message: "Attendee already exist",
                        type: "error",
                        position : "bottom"                        
                    });  
          } 
          else{
            const updatedMeeting =  await addAttendee(id,selectedMember);
            this.meetingMembers = updatedMeeting.attendees;
            console.log(this.meetingMembers);
            Vue.$toast.open({
                        message: `Attendee successfully Added!`,
                        type: "success",
                        position : "bottom"
                    });
          } 
          this.selectedMember=''
        },
        async excuse(id){
            const remove = await excuseFromMeeting(id);
            if(remove){
                this.updateMeetings(remove,this.index);
                Vue.$toast.open({
                        message: `Excused from Meeting '${remove.name}'`,
                        type: "success",
                        position : "bottom"
                    });
            }
            else
            {
                Vue.$toast.open({
                        message: "Oops Unsuccessful excuse attempt",
                        type: "error",
                        position : "bottom"
                    });
            }
        }
    }   
}
</script >

<style scoped>
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
}

</style>