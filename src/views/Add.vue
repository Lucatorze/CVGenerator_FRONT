<template>
    <div id="add-view">
        <h1>Créez votre CV</h1>
        <hr>
        <br>
        <cv-form></cv-form>
    </div>
</template>

<script>

    import CvForm from "../components/CvForm.vue";
    //import axios from 'axios';

    export default {
        components: {CvForm},
        name: 'add-view',
        data () {
            return {
                cv : {},
            }
        },
        /*methods:{
          addUser: function (user) {
              console.log(user);
              axios.post('http://localhost:1337/collaborateur', user)
              location.reload();
          },
      }*/
    }
</script>
