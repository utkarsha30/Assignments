<template>
  <div>
    <hour-glass-loading v-if="loading"></hour-glass-loading>
    <b-card v-if="!loading" class="extra-css"  bg-variant="info"  text-variant="black">
        <b-card-title  class="title-font-color">Add a Meeting</b-card-title>
         <hr />
         <div class="card-body">
            <form @submit.prevent="addMeeting">
                <div class="form-group"> 
                    <label for="meetingsName"  class="blockquote">Name</label>
                    <input type="text" class="form-control" name="meetingsName" id="meetingsName" placeholder="Name of Meeting" v-model="meetingName" />
                </div>
                <div class="form-group"> 
                    <label for="meetingsDate"  class="blockquote">Date</label>
                    <input type="date" class="form-control" id="meetingsDate" placeholder="dd/mm/yyyy" v-model="meetingDate" />
                    
                </div>
                <div class="form-group"> 
                    <label for="meetingsStartTimeHours"  class="blockquote">Start time (hh:mm)</label>
                    <div class="groupElements">
                        
                        <select name="meetingsStartTimeHours" id="meetingsStartTimeHours" class="custom-select" v-model.number="startTimeHr" >
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                            <option  value="6">6</option>
                            <option  value="7">7</option>
                            <option  value="8">8</option>
                            <option  value="9">9</option>
                            <option  value="10">10</option>
                            <option  value="11">11</option>
                            <option  value="12">12</option>
                            <option  value="13">13</option>
                            <option  value="14">14</option>
                            <option  value="15">15</option>
                            <option  value="16">16</option>
                            <option value="17">17</option>
                            <option  value="18">18</option>
                            <option  value="19">19</option>
                            <option  value="20">20</option>
                            <option  value="21">21</option>
                            <option  value="22">22</option>
                            <option  value="23">23</option>
                            <option  value="24">24</option>
                        </select>
                        : 
                        <select name="meetingsStartTimeMinutes" id="meetingsStartTimeMinutes" class="custom-select" v-model.number="startTimeMin">
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                            <option  value="6">6</option>
                            <option  value="7">7</option>
                            <option  value="8">8</option>
                            <option  value="9">9</option>
                            <option  value="10">10</option>
                            <option  value="11">11</option>
                            <option  value="12">12</option>
                            <option  value="13">13</option>
                            <option  value="14">14</option>
                            <option  value="15">15</option>
                            <option  value="16">16</option>
                            <option value="17">17</option>
                            <option  value="18">18</option>
                            <option  value="19">19</option>
                            <option  value="20">20</option>
                            <option  value="21">21</option>
                            <option  value="22">22</option>
                            <option  value="23">23</option>
                            <option  value="24">24</option>
                        </select>
                    </div>
                </div>

                <div class="form-group"> 
                    <label for="meetingsEndTimeHours"  class="blockquote">End time (hh:mm)</label>
                    <div class="groupElements">
                        <select name="meetingsEndTimeHours" id="meetingsEndTimeHours" class="custom-select" v-model.number="endTimeHr" >
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                            <option  value="6">6</option>
                            <option  value="7">7</option>
                            <option  value="8">8</option>
                            <option  value="9">9</option>
                            <option  value="10">10</option>
                            <option  value="11">11</option>
                            <option  value="12">12</option>
                            <option  value="13">13</option>
                            <option  value="14">14</option>
                            <option  value="15">15</option>
                            <option  value="16">16</option>
                            <option value="17">17</option>
                            <option  value="18">18</option>
                            <option  value="19">19</option>
                            <option  value="20">20</option>
                            <option  value="21">21</option>
                            <option  value="22">22</option>
                            <option  value="23">23</option>
                            <option  value="24">24</option>
                        </select>
                        : 
                        <select name="meetingsEndTimeMinutes" id="meetingsEndTimeMinutes" class="custom-select " v-model.number="endTimeMin">
                            <option selected value="0">0</option>
                            <option value="1">1</option>
                            <option  value="2">2</option>
                            <option  value="3">3</option>
                            <option  value="4">4</option>
                            <option  value="5">5</option>
                            <option  value="6">6</option>
                            <option  value="7">7</option>
                            <option  value="8">8</option>
                            <option  value="9">9</option>
                            <option  value="10">10</option>
                            <option  value="11">11</option>
                            <option  value="12">12</option>
                            <option  value="13">13</option>
                            <option  value="14">14</option>
                            <option  value="15">15</option>
                            <option  value="16">16</option>
                            <option value="17">17</option>
                            <option  value="18">18</option>
                            <option  value="19">19</option>
                            <option  value="20">20</option>
                            <option  value="21">21</option>
                            <option  value="22">22</option>
                            <option  value="23">23</option>
                            <option  value="24">24</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="meetingsDescription"  class="blockquote" >Description</label>
                    <textarea class="form-control" name="meetingsDescription" id="meetingsDescription" placeholder="What is the agenda of the meeting" v-model="meetingDescription"></textarea>
                </div>
                <div class="form-group">
                    <label for="meetingsEmail">EmailIDs of attendees , or teams short</label> 
                    <input type="text" class="form-control" id="meetingsEmail" aria-describedby="emailHelp" placeholder="john@example.com, @annual-day, mark@example.com" v-model="meetingAttendee" >
                    <small id="emailHelp" class="form-text title-font-color">Seperate emailids / short names by commas - team short names always begins with @.</small>
                </div>
                <button type="submit"  class="btn btn-primary">Add a meeting</button>
            </form>
         </div>
    </b-card>
  </div>
</template>

<script >
import {postMeeting} from '@/service/meeting';
import HourGlassLoading from "../HourGlassLoading.vue";
import Vue from "vue";
export default {
    name:'MeetingsAdd',
    components:{
        HourGlassLoading
    },
    props:{
        updateMeeting:{
            type:Function,
            default: () => {}
        }
    },
    data(){
        return {
            meetingDate:null,
            startTimeHr:0,
            startTimeMin:0,
            endTimeHr:0,
            endTimeMin:0,
            meetingDescription:null,
            meetingName:null,
            meetingAttendee: null,
            loading:false,
            error: null,
        }
    },
    methods: {
        async addMeeting(){
            const arrayAttendees =this.meetingAttendee.split(',');
            console.log(this.meetingDate);
            const obj={
                name : this.meetingName,
                date:this.meetingDate,
                description:this.meetingDescription,
                startTime: {
                    hours: this.startTimeHr,
                    minutes: this.startTimeMin
                },
                endTime: {
                    hours: this.endTimeHr,
                    minutes: this.endTimeMin
                },
                attendees:arrayAttendees

            }
            this.loading = true;
            console.log(obj);
            
            try{
                const val = await postMeeting(obj);
                console.log(val);
                Vue.$toast.open({
                        message: `Meeting '${val.name}' with id=${val._id} was added`,
                        type: "success"
                    });
                    this.$router.push({
                        path : '/meetings',
                    });
                    
            }
            catch(error){
                Vue.$toast.open({
                        message: error.message,
                        type: "error"
                        
                    });
            }
            finally{
                this.loading = false;
            }
            
        }
        
    }
}
</script>

<style scoped>
.title-font-color{
    color:white;
}

.groupElements{
    display: block-inline;
}
.custom-select{
    width: 6%;
}
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
    background-image: linear-gradient(to bottom, rgb(23,162,184), rgb(174, 195, 228));
}
</style>