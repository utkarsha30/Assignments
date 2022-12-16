<template>
  <div>
    {{teamName}} {{teamShortName}} {{teamDescription}}
   <b-card class="mt-3 extra-css">
    <b-form @submit.prevent="addNewTeams">
      <b-form-group>
        <b-form-input
            id="teamName"
            placeholder="Team name"
            v-model="teamName"
            required
          ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="teamShortName"
          v-model="teamShortName"
          placeholder="Team short name"
          required
        ></b-form-input>
      </b-form-group>
    <b-form-group>
      <b-form-textarea
          id="teamDescription"
          v-model="teamDescription"
          placeholder="Provide a description for the team"
          required
        ></b-form-textarea>
    </b-form-group>
    <hr/>
    <b-form-group>
      <p><span class="font-weight-bold">Members :</span><span v-for="member in memberList" :key="member"> {{member}}</span></p>
      <div class="groupElements">
        <b-form-select
        class="w-50 mr-3"
          id="teamMembers"
          v-model="selectedMember"
          
          required
        >
        <option selected value="">Select Members</option>
        <option v-for="member in members" :key="member.email">{{member.email}}</option>
      </b-form-select>
        <b-button type="submit" @click.prevent="addMemberToTeam(selectedMember)" variant="primary">Add</b-button>
      </div>

    </b-form-group>
    <b-form-group>
      <b-button type="submit" class="w-100" variant="primary">Add Team</b-button>
    </b-form-group>
    </b-form>
   </b-card>
  </div>
</template>

<script>
import {postTeams} from '@/service/teams'
import Vue from "vue";
export default {
    name: 'TeamsAdd',
    props:{
      members:{
            type:Array,
            required: true
        },
      updateTeams : {
            type: Function,
            default: () => {}
        }
    },
    data(){
      return{
            error: null,
        teamName: null,
        teamShortName: null,
        teamDescription:null,
        memberList : [],
        selectedMember:'',
        teams:[{ text: 'Select Member', value: null },{text: 'jane.doe@example.com',value:'jane.doe@example.com' },{text:'21mci1107@example.com',value:'21mci1107@example.com'}]
      }
    },
    methods:{
      addMemberToTeam(selectedMember){
        this.memberList.push(selectedMember);
      },
      async addNewTeams(){
        const teamsDetails ={
          name: this.teamName,
          shortName : this.teamShortName,
          description: this.teamDescription,
          members: this.memberList
        };
        console.log(teamsDetails);
      
          const newTeam = await postTeams(teamsDetails);
          console.log(newTeam);
          if(newTeam){
            this.updateTeams(newTeam);
            Vue.$toast.open({
                        message: `Meeting '${newTeam.name}'  was added`,
                        type: "success",
                        position : "top-right"
                    });
          this.teamName= null;
          this.teamShortName= null;
          this.teamDescription=null;
          this.memberList = [];
          this.selectedMember='';
                    
          }
          else{
            Vue.$toast.open({
                        message: "Unsuccessful add attempt",
                        type: "error"
                        
                    });
                    this.teamName= null;
          this.teamShortName= null;
          this.teamDescription=null;
          this.memberList = [];
          this.selectedMember='';
          }   
      }
    }
}
</script>

<style scoped>
.groupElements{
    display: block-inline;
}
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
}
</style>