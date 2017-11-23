<template>
    <article class="user-card">
        <figure>
            <img :src="user.photo" :alt="fullname">
        </figure>
        <div>
            <h1>{{fullname}}</h1>
            <p>
            <i class="material-icons">email</i> <a href="mailto:edouard.brun@example.com" :title="'Envoyer un email à ' + fullname">{{user.email}}</a><br>
            <i class="material-icons">local_phone</i><a :href="'tel:'+user.phone" :title="'Téléphoner à ' + fullname">{{user.phone}}</a><br>
            <i class="material-icons">perm_contact_calendar</i> {{user.birthdate}} ({{user.birthdate | age}} ans)<br>
            <i class="material-icons">location_on</i>  {{user.city}}, {{user.country}}
            </p>
            <button class="waves-effect waves-light btn" @click.prevent="remove">Supprimer</button>
        </div>
    </article>
</template>
