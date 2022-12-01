<template>
  <div>
    <div class="body-heading">
      <h1>Teams</h1>
      <hr />
    </div>
    <h3 class="subheading">View and edit teams you are part of</h3>
    <div class="d-flex justify-content-center" v-if="loading">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
            {{ error.message }}
    </div> 
    <div class="row">
        <div class="col-sm-8">
            <div class="row" v-if="!loading && !error && teams.length !== 0">
                <div
                    class="col-12 col-sm-12 col-lg-6 d-flex "
                    v-for="team in teams"
                    :key="team._id">

                        <router-view :team="team"></router-view>
                    
                </div>
                <!--col-sm-8 col-sm-4  -->
            </div>
        </div>
        <div class="col-sm-4"> 
            <teams-add></teams-add>
        </div>
    </div>
  </div>
</template>

<script>
import {getTeams} from '@/service/teams'
import TeamsAdd from './TeamsAdd.vue';

export default {
  components: { TeamsAdd },
    name:'TeamsList',
    data(){
        return {
            teams:[],
            loading:false,
            error: null
        }
    },
    async mounted(){
        this.loading = true;
        try{
            const teams = await getTeams();
            this.teams = teams;
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
.subheading{
    color: rgb(159,165,170) 
}



</style>