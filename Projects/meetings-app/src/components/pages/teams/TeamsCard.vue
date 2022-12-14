<template>
  
    <b-card  class=" p-3 my-3 d-flex  flex-column justify-content-between extra-css " >
            <b-card-title>{{team.name}}<br /><small>{{team.shortName}}</small></b-card-title>
            <b-card-sub-title >{{team.description}}</b-card-sub-title>
            <b-button variant="danger"  @click.prevent="excuse(team._id,index)" class="mt-3">Excuse yourself</b-button>
            <hr />
            <p><span class="font-weight-bold">Members :</span><span v-for="member in this.teamMembers" :key="member.userId"> {{member.email}}</span></p>
            <div>
                <select v-model="selectedMember" name="meetingsMembers" id="meetingsMembers" class="custom-select w-50">
                        <option selected value="">Select Members</option>
                        <option v-for="member in members" :key="member.email" :value="member._id">{{member.email}}</option>
                    </select>
                <button @click.prevent="addMemberToTeam(team._id,selectedMember)" class="btn btn-primary ml-2" >Add</button>
            </div>
        </b-card>
 
</template>

<script>
import { excuseFromTeams, addAttendee} from '@/service/teams';
import Vue from "vue";
export default {
    name: 'TemasCard',
    props:{
        index:{
            type:Number,
            required:true
        },
        members:{
            type:Array,
            required: true
        },
        team:{
            type:Object,
            required : true
        } ,
        updateAfterExcuse:{
            type:Function,
            default: () => {}
        } 
    },
    data(){
       return{
        selectedMember:'',
        teamMembers: this.team.members
        
       } 
    },
    methods:{
        async addMemberToTeam(id,selectedMember){
            console.log(selectedMember);
          const check = this.teamMembers.filter(member=>member.userId === selectedMember);
          if(check.length !==0)
          {
            Vue.$toast.open({
                        message: "Member already exist",
                        type: "error",
                        position : "bottom"    
                    });  
          } 
          else{
            const updatedTeam =  await addAttendee(id,selectedMember);
            this.teamMembers = updatedTeam.members;
            Vue.$toast.open({
                        message: `Member successfully Added!'`,
                        type: "success",
                        position : "bottom"
                    });
          } 
          this.selectedMember=''
        },
        async excuse(id){
            const remove = await excuseFromTeams(id);
            if(remove){
                this.updateAfterExcuse(remove,this.index);
                Vue.$toast.open({
                        message: `Excused from Team '${remove.name}'`,
                        type: "success",
                        position : "bottom"
                    });
            }
            else
            {
                Vue.$toast.open({
                        message: "Unsuccessful add attempt",
                        type: "error",
                        position : "bottom"
                    });
            }
        }
    }   
}
</script>

<style scoped>
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
}

</style>