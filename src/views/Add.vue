<template>
    <div id="add-view">
        <h1>Créez votre CV</h1>
        <hr>
        <br>
<<<<<<< HEAD
        <cv-form></cv-form>
=======
        <cv-form @send="addCv"></cv-form>
>>>>>>> 5be9c3f52e9fe050a9158580c9e71589351cc140
    </div>
</template>

<script>
    import CvDisplay from '../components/CvDisplay.vue';
    import CvForm from "../components/CvForm.vue";
    import axios from 'axios';

    export default {
        components: {CvForm},
        name: 'add-view',
        data () {
            return {
                cv : {},
            }
        },
        methods:{
          addCv: function (cv) {
              console.log(cv);
              return axios
        .post('//10.38.163.169:3002/cv/create', cv)
        .then(res => res.data)
        .catch(console.message);
          },
      }
    }
</script>
