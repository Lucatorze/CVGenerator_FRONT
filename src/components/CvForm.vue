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
                  <div class="input-field col s12">
                    <label for="adress">Adresse</label>
                      <input id="adress" type="text" class="validate" v-model="cv.adress">
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

          <div class="row">
              <div class="input-field col s6">
                  <label for="experience" id="experience" >Expérience</label>
                  <div class="input-field">
                    <input id="jobTitle1" v-model="cv.experience.jobTitle1" v-model.trim="cv.experience.jobTitle1" type="text" placeholder="Job Title" >
                    <input id="compagny1" v-model="cv.experience.compagny1" v-model.trim="cv.experience.compagny1" type="text" placeholder="Compagny">
                    <input id="place1" v-model="cv.experience.place1" v-model.trim="cv.experience.place1"type="text" placeholder="Place">
                    <input id="dateStart1" v-model="cv.experience.dateStart1" v-model.trim="cv.experience.dateStart1" type="date">
                    <input id="dateEnd1" v-model="cv.experience.dateEnd1" v-model.trim="cv.experience.dateEnd1"type="date">
                    <textarea id="description1" v-model="cv.experience.description1" v-model.trim="cv.experience.description1" type="text" placeholder="Description"></textarea>
                  </div>
              </div>

              <div class="input-field col s6">
                  <label for="formation">Formation</label>
                  <div class="input-field">
                    <input id="name1" v-model="cv.formation.name1" v-model.trim="cv.formation.name1" type="text" placeholder="Name" >
                    <input id="qualification1" v-model="cv.formation.qualification1" v-model.trim="cv.formation.qualification1" type="text" placeholder="Qualification">
                    <input id="place1" v-model="cv.formation.place1" v-model.trim="cv.formation.place1" type="text" placeholder="Place">
                    <input id="dateStart1" v-model="cv.formation.dateStart1" v-model.trim="cv.formation.dateStart1" type="date">
                    <input id="dateEnd1" v-model="cv.formation.dateEnd1" v-model.trim="cv.formation.dateEnd1" type="date">
                    <textarea id="description1" v-model="cv.formation.description1" v-model.trim="cv.formation.description1" type="text" placeholder="Description"></textarea>
                  </div>
              </div>
            </div>
            <br /><br />
            <hr />
            <br /><br />
            <div class="row">
                <div class="input-field col s6">
                    <label for="experience">Expérience</label>
                    <div class="input-field">
                      <input id="jobTitle2" v-model="cv.experience.jobTitle2" v-model.trim="cv.experience.jobTitle2" type="text" placeholder="Job Title" >
                      <input id="compagny2" v-model="cv.experience.compagny2" v-model.trim="cv.experience.compagny2" type="text" placeholder="Compagny">
                      <input id="place2" v-model="cv.experience.place2" v-model.trim="cv.experience.place2" type="text" placeholder="Place">
                      <input id="dateStart2" v-model="cv.experience.dateStart2" v-model.trim="cv.experience.dateStart2" type="date">
                      <input id="dateEnd2" v-model="cv.experience.dateEnd2" v-model.trim="cv.experience.dateEnd2" type="date">
                      <textarea id="description2" v-model="cv.experience.description2" v-model.trim="cv.experience.description2" type="text" placeholder="Description"></textarea>
                    </div>
                </div>

                <div class="input-field col s6">
                    <label for="formation">Formation</label>
                    <div class="input-field">
                      <input id="name2" v-model="cv.formation.name2" v-model.trim="cv.formation.name2" type="text" placeholder="Name" >
                      <input id="qualification2" v-model="cv.formation.qualification2" v-model.trim="cv.formation.qualification2" type="text" placeholder="Qualification">
                      <input id="place2" v-model="cv.formation.place2" v-model.trim="cv.formation.place2" type="text" placeholder="Place">
                      <input id="dateStart2" v-model="cv.formation.dateStart2" v-model.trim="cv.formation.dateStart2" type="date">
                      <input id="dateEnd2" v-model="cv.formation.dateEnd2" v-model.trim="cv.formation.dateEnd2" type="date">
                      <textarea id="description2" v-model="cv.formation.description2" v-model.trim="cv.formation.description2" type="text" placeholder="Description"></textarea>
                    </div>
                </div>
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
         adress:'',
         phone : '',
         birthdate : '',
         city : '',
         country : '',
         photo : '',
         job : '',
         experience : {
           jobTitle1:'',
           compagny1:'',
           place1:'',
           dateStart1:'',
           dateStart1:'',
           description1:'',
           jobTitle2:'',
           compagny2:'',
           place2:'',
           dateStart2:'',
           dateStart2:'',
           description2:''
         },
         formation:{
           name1:'',
           qualification1:'',
           place1:'',
           dateStart1:'',
           dateEnd1:'',
           description1:'',
           name2:'',
           qualification2:'',
           place2:'',
           dateStart2:'',
           dateEnd2:'',
           description2:'',
         }
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
.alert {
      color: #D8000C;
      float: right;
  }
</style>
