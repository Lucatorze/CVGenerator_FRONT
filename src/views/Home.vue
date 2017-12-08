<template>
  <main id="app">

    <div class="container">
      <h1>Liste des CV</h1>

      <hr>
      <div v-for="(cv, i) in cvs" :key="i" class="cv-list">
        <cv-display :cv="cv" v-if="cv" @remove="removeCv"></cv-display>
      </div>
    </div>
  </main>
</template>

<script>

import CvDisplay from '../components/CvDisplay.vue'
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
      },

      created(){
        CvService.fetchAll().then(cvs => {
          this.cvs = cvs;
        });
      }
  }

</script>

<style>
body {
  margin: 0;
}

.cv-list{
  display: inline-block;
  margin:50px;
}

</style>
