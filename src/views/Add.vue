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
    import CvService from "../service/CvService";
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
            addCv(cv){
            CvService.addCv(cv).then(cv => {
                        console.log('ok')
             });
            }
      }
    }
</script>
