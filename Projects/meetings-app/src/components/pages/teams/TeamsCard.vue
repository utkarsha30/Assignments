<template>
  
    <b-card  class=" p-3 my-3 d-flex  flex-column justify-content-between extra-css " >
            <b-card-title>{{team.name}}<br /><small>{{team.shortName}}</small></b-card-title>
            <b-card-sub-title >{{team.description}}</b-card-sub-title>
            <b-button variant="danger"  @click.prevent="excuse(team._id,index)" class="mt-3">Excuse yourself</b-button>
            <hr />
            <p><span class="font-weight-bold">Members :</span><span v-for="member in team.members" :key="member.userId"> {{member.email}}</span></p>
            <div>
                <select name="meetingsMembers" id="meetingsMembers" class="custom-select w-50">
                        <option selected value="">Select Members</option>
                        <option v-for="member in members" :key="member.email">{{member.email}}</option>
                    </select>
                <button class="btn btn-primary ml-2" >Add</button>
            </div>
        </b-card>
 
</template>

<script>
import { excuseFromTeams } from '@/service/teams';
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
    methods:{
        async excuse(id){
            const remove = await excuseFromTeams(id);
            if(remove){
                this.updateAfterExcuse(remove,this.index);
                Vue.$toast.open({
                        message: `Excused from Team '${remove.name}'`,
                        type: "success",
                        position : "top-right"
                    });
            }
            else
            {
                Vue.$toast.open({
                        message: "Unsuccessful add attempt",
                        type: "error"
                        
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