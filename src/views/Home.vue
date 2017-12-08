<template>
  <main id="app">

    <div class="container">
      <h1>Liste des CV</h1>

      <hr>

      <!--<form>
        <input type="search" v-model.trim="searchText" @input="filterSearch" placeholder="Rechercher par nom ou lieu"/>
        <label for="filter">Filtrer par :</label>
        <select name="filterBy" v-model="filterBy" @change="filterSearch">
          <option value="name">Nom</option>
          <option value="localisation">Localisation</option>
        </select>
      </form>-->

      <div v-for="(cv, i) in cvs" :key="i" class="cv-list">
        <cv-display :cv="cv" v-if="cv" @remove="removeCv"></cv-display>
      </div>
    </div><!-- .container -->
  </main>
</template>

<script>

//import users from '../data/_users.json'
import CvDisplay from '../components/CvDisplay.vue'
import axios from 'axios'
import CvService from '../service/CvService.js'


export default {
      components: {CvDisplay},
      name: 'listView',
      data () {
          return {
              cvs: [],
              filteredCvs : this.cvs,
              searchText: "",
              filterBy : 'name'
          }
      },
      methods:{
          removeCv(cv){
            console.log(cv)
            CvService.removeCv(cv).then(response => {
            this.cvs = this.cvs.filter(cv => {return response.deleted._id != cv.id});
            });
          },

          /*filterSearch() {
              this.filteredCvs = this.cvs.filter( this.filterBy === 'localisation' ? filterByLocalisation.bind(this) : filterByName.bind(this) );
          },*/
      },

      created(){
        CvService.fetchAll().then(cvs => {
          this.cvs = cvs;
        });
      }
  }

  /*function filterByName(cv) {
      return cv.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
            cv.lastname.toLowerCase().includes(this.searchText.toLowerCase())
  }*/

</script>

<style>
body {
  margin: 0;
}

.user-list{
  display: inline-block;
  margin:50px;
}

</style>
