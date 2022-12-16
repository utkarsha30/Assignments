<template>
    <div> 
    <app-menu /> 
    <div class="container my-4">
        <div class="body-heading">
        <h1>Teams</h1>
        <hr />
        </div>
        <h3 class="subheading">View and edit teams you are part of</h3>
        <HourGlassLoading v-if="loading"></HourGlassLoading>
        <div class="alert alert-danger" role="alert" v-if="error">
                {{ error.message }}
        </div> 
        <div class="row">
            <div class="col-sm-8">
                <div class="row" v-if="!loading && !error && teams.length !== 0">
                    <div
                        class="col-12 col-sm-12 col-lg-6 d-flex "
                        v-for="(team,index) in teams"
                        :key="team._id">

                            <router-view :team="team" :index="index" :members="members" :updateAfterExcuse="updateAfterExcuse"></router-view>
                        
                    </div>
                    <!--col-sm-8 col-sm-4  -->
                </div>
            </div>
            <div class="col-sm-4" v-if="!loading && !error"> 
                <teams-add :updateTeams = "updateTeams" :members="members"></teams-add>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu.vue'
import {getTeams} from '@/service/teams'
import {registeredUsers} from '@/service/user';
import TeamsAdd from './TeamsAdd.vue';
import HourGlassLoading from "../HourGlassLoading.vue";


export default {
  components: {
    AppMenu,
    TeamsAdd,
    HourGlassLoading
},
    name:'TeamsList',
    data(){
        return {
            teams:[],
            loading:false,
            error: null,
            members:[]
        }
    },
    methods:{
        async updateTeams(team){
            this.teams.push(team);
        },
        async updateAfterExcuse(team,index){
            this.teams.splice(index,1);
        }
    },
    async mounted(){
        this.loading = true;
        try{
            const teams = await getTeams();
            this.teams = teams;
            const members = await registeredUsers();
                this.members = members;
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