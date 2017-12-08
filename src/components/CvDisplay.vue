<template>
    <article class="cv-display">
        <figure>
            <img :src="cv.photo" :alt="fullname">
        </figure>
        <div>
            <h1>{{fullname}}</h1>
            <p>
            <i class="material-icons">email</i> <a href="mailto:edouard.brun@example.com" :title="'Envoyer un email à ' + fullname">{{cv.email}}</a><br>
            <i class="material-icons">local_phone</i><a :href="'tel:'+cv.phone" :title="'Téléphoner à ' + fullname">{{cv.phone}}</a><br>
            <i class="material-icons">perm_contact_calendar</i> {{cv.birthdate}} ({{cv.birthdate | age}} ans)<br>
            <i class="material-icons">location_on</i>  {{cv.city}}, {{cv.country}}
            </p>
            <router-link :to="{ name: 'generator', params: { id: cv.id }}"><button class="waves-effect waves-light btn">Modifier ce cv</button></router-link>
            <button class="waves-effect waves-light btn" @click.prevent="remove">Supprimer</button>
        </div>
    </article>
</template>

<script>
export default {
    props : {
        cv : { type: Object, required : true }
    },
    methods:{
            remove(){
                this.$emit("remove", this.cv)
            }
        },

    computed: {
        fullname() {
        return this.cv.firstname + ' ' + this.cv.lastname
        }
    }
}
</script>

<style>

.cv-display {
  display: inline-flex;
  align-items: stretch;
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;

  > figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
    > img {
      display: block;
      border-radius: 300px;
    }
  }

  > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
  }

  h1 {
    margin: 0.25em 0 0.5em;
  }
}

</style>
