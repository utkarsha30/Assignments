<template>
  
    <b-card  class=" p-3 my-3 d-flex  flex-column justify-content-between extra-css " >
            <b-card-title>{{team.name}}<br /><small>{{team.shortName}}</small></b-card-title>
            <b-card-sub-title >{{team.description}}</b-card-sub-title>
            <b-button variant="danger" class="mt-3">Excuse yourself</b-button>
            <hr />
            <p><span class="font-weight-bold">Members :</span><span v-for="member in team.members" :key="member.userId"> {{member.email}}</span></p>
            <div>
                <select name="meetingsMembers" id="meetingsMembers" class="custom-select w-50">
                        <option selected value="">Select Members</option>
                        <option value="past">PAST</option>
                        <option value="today">TODAY</option>
                        <option value="upcoming">UPCOMING</option>
                    </select>
                <button class="btn btn-primary ml-2" >Add</button>
            </div>
        </b-card>
 
</template>

<script>
export default {
    name: 'TemasCard',
    props:{
        team:{
            type:Object,
            required : true
        }  
    }
}
</script>

<style scoped>
.extra-css{
    box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
}

</style>