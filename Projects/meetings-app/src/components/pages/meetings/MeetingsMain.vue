<template>
  <div>
    <div class="body-heading">
      <h1>Meetings</h1>
      <hr />
    </div>
    <div>
      <b-nav tabs>
        <b-nav-item  active to="/meetings">Filter/search Meetings</b-nav-item>
        <b-nav-item   to="/meetings/add">Add a meeting</b-nav-item>
      </b-nav>
  </div>
  <div>
    <router-link
      :to="{ name: 'meetings-list'}"
                    class="mr-3"
                    exact-active-class="active">
    </router-link>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
    name:'MeetingsMain',
    data(){
      return {
         
      }
    }

}
</script>

<style scoped>

</style>