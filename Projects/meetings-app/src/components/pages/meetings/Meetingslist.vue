<template>
  <div>
    <b-card   bg-variant="info"  text-variant="black">
        <b-card-title  class="title-font-color">Search for Meetings</b-card-title>
     <hr />
     <div class="card-body">
            <div class="form-group">
                <label for="meetingsDate"  class="blockquote">Date</label>
                <select name="meetingsDate" id="meetingsDate" class="custom-select  mb-3" v-model="dateSelect">
                    <option selected value="all">ALL</option>
                    <option value="past">PAST</option>
                    <option value="present">TODAY</option>
                    <option value="future">UPCOMING</option>
                </select>
            </div>
            <div class="form-group">
                <label for="meetingsDescription"  class="blockquote" >Search for</label>
                <textarea class="form-control" name="meetingsDescription" id="meetingsDescription" placeholder="Search using words which describe the meeting"></textarea>
            </div>
            <button type="submit" @click="filter" class="btn btn-primary">Search</button>
     </div>
  </b-card>
  <div class="body-heading mt-4">
      <h2>Meetings matching Search Criteria</h2>
      <hr />
    </div>
    
  <div>
    <router-link
    :to="{ name: 'meetings-list-by-date'}"
                    exact-active-class="active"
                    class="mr-3" >

    </router-link>
    <router-view :dateSelect = "dateSelect" ></router-view>
   
  </div>
  </div>
</template>

<script>

export default {
    name: 'MeetingsList',
    data(){
        return {
            dateSelect: 'all'
        }
    }
}
</script>

<style scoped>
.title-font-color{
    color:white;
}

</style>