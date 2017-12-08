<template>
  <form class="cv-form" method="POST" @submit.prevent="send">
          <div class="row">
              <div class="input-field col s6">
                  <label for="firstname">Prenom</label>
                  <input id="firstname" type="text" class="validate" v-model="cv.firstname" v-model.trim="cv.firstname" @input="$v.cv.firstname.$touch()">

                  <span class="form-group__message alert" v-if="!$v.cv.firstname.required && $v.cv.firstname.$dirty">Le champ "Prenom" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.cv.firstname.minLength">Il doit y avoir un minimum de {{$v.cv.firstname.$params.minLength.min}} lettres.</span>
              </div>
              <div class="input-field col s6">
                  <label for="lastname">Nom</label>
                  <input id="lastname" type="text" class="validate" v-model="cv.lastname" v-model.trim="cv.lastname" @input="$v.cv.lastname.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.lastname.required && $v.cv.lastname.$dirty">Le champ "Nom" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.cv.lastname.minLength">Il doit y avoir un minimum de {{$v.cv.lastname.$params.minLength.min}} lettres.</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">
                  <label for="email">Email</label>
                  <input id="email" type="email" class="validate" v-model="cv.email" v-model.trim="cv.email" @input="$v.cv.email.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.email.required && $v.cv.email.$dirty">Le champ "Email" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.cv.email.email">La saisie ne correspond pas à une email</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s6">
                <label for="phone">Telephone</label>
                  <input id="phone" type="tel" class="validate" v-model="cv.phone" v-model.trim="cv.phone" @input="$v.cv.phone.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.phone.required && $v.cv.phone.$dirty">Le champ "Telephone" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.cv.phone.minLength">Il doit y avoir un minimum de {{$v.cv.phone.$params.minLength.min}} lettres.</span>
                  <span class="form-group__message alert" v-if="!$v.cv.phone.maxLength">Il doit y avoir un maximum de {{$v.cv.phone.$params.maxLength.min}} lettres.</span>
              </div>
              <div class="input-field col s6">
                  <input id="birthdate" type="date" class="datepicker" v-model="cv.birthdate" v-model.trim="cv.birthdate" @input="$v.cv.birthdate.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.birthdate.required && $v.cv.birthdate.$dirty">Le champ "Date de naissance" est obligatoire</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s6">
                  <label for="city">Ville</label>
                  <input id="city" type="text" class="validate" v-model="cv.city" v-model.trim="cv.city" @input="$v.cv.city.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.city.required && $v.cv.city.$dirty">Le champ "Ville" est obligatoire</span>

              </div>
              <div class="input-field col s6">
                <label for="country">Pays</label>
                  <input id="country" type="text" class="validate" v-model="cv.country" v-model.trim="cv.country" @input="$v.cv.country.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.country.required && $v.cv.country.$dirty">Le champ "Pays" est obligatoire</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">
                <label for="photo">Photo</label>
                  <input id="photo" type="text" class="validate" v-model="cv.photo">
              </div>
          </div>

          <div class="row">
              <div class="input-field col s12">
                  <label for="job">Job Title</label>
                  <input id="job" type="text" class="validate" v-model="cv.job" v-model.trim="cv.job" @input="$v.cv.job.$touch()">
                  <span class="form-group__message alert" v-if="!$v.cv.job.required && $v.cv.job.$dirty">Le champ "Job Title" est obligatoire</span>
              </div>
          </div>
          <input type="submit" value="Envoyer !">
      </form>
</template>

<script>
import { required, email, minLength, maxLength, url } from 'vuelidate/lib/validators'

export default {
   name : "cv-form",
   data () {
     return {
       cv : {
         lastname : '',
         firstname : '',
         email : '',
         phone : '',
         birthdate : '',
         city : '',
         country : '',
         photo : '',
         job : '',
       }
     }
   },
   methods:{
     send: function(){
       this.$emit('send', this.cv);
     },
  },
  validations: {
            cv: {
                firstname: {
                    required,
                    minLength : minLength(2),
                },
                lastname: {
                    required,
                    minLength : minLength(2),
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required,
                    minLength : minLength(9),
                    maxLength: maxLength(10),
                },
                birthdate: {
                    required,
                },
                city: {
                    required,
                },
                country: {
                    required,
                },
                photo: {
                    url
                },
                job: {
                    required,
                },
            }
    }
}
</script>

<style>
.cvform input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.cvform input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.cv-form input[type=submit]:hover {
    background-color: #45a049;
}

.cv{
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

.alert {
      color: #D8000C;
      float: right;
  }
</style>
