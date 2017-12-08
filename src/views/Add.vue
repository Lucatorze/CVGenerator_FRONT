<template>
    <div id="add-view">
        <h1>Créez votre CV</h1>
        <hr>
        <br>
        <cv-form @send="addCv"></cv-form>
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
