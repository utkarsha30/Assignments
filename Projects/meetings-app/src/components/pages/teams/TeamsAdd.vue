<template>
  <div>
   <b-card class="mt-3 extra-css">
    <b-form>
      <b-form-group>
        <b-form-input
            id="teamName"
            placeholder="Team name"
            required
          ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          id="teamShortName"
          placeholder="Team short name"
          required
        ></b-form-input>
      </b-form-group>
    <b-form-group>
      <b-form-textarea
          id="teamDescription"
          placeholder="Provide a description for the team"
          required
        ></b-form-textarea>
    </b-form-group>
    <hr/>
    <b-form-group>
      <p><span class="font-weight-bold">Members :</span><span> jon@gmal.com</span></p>
      <div class="groupElements">
        <b-form-select
        class="w-50 mr-3"
          id="teamMembers"
          v-model="selected"
          :options="teams"
          required
        ></b-form-select>
        <b-button type="submit" variant="primary">Add</b-button>
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
export default {
    name: 'TeamsAdd',
    data(){
      return{
        selected:null,
        teams:[{ text: 'Select Member', value: null }]
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