<template>
    <article class="cv-display">
        <div>
            <center><h4>{{fullname}}</h4></center><br>
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
}
   figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
   }
    img {
      display: block;
      border-radius: 300px;
    }
  

   div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
  }

  h1 {
    margin: 0.25em 0 0.5em;
  }


</style>
