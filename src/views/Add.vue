<template>
    <div id="add-view">
        <h1>Ajouter un collaborateur</h1>
        <hr>
        <br>
        <user-form></user-form>
    </div>
</template>

<script>

    import UserForm from "../components/CvForm.vue";
    import axios from 'axios';

    export default {
        components: {CvForm},
        name: 'add-view',
        data () {
            return {
                user : {},
            }
        },
        methods:{
          addUser: function (user) {
              console.log(user);
              axios.post('http://localhost:1337/collaborateur', user)
              location.reload();
          },
        }
    }
</script>
