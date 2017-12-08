<template>
    <div id="app" class="row">
        <nav>
            <div class="nav-wrapper">
                <ul class="left hide-on-med-and-down">

                    <li><router-link to="/">Liste des CV</router-link></li>
                    <!--<li><router-link to="/list">Liste des CV</router-link></li>-->
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li><router-link to="/add">Ajouter un CV</router-link></li>
                </ul>
            </div>
        </nav>

        <div class="col s8 offset-s2">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    h1{
        font-size: 50px;
    }
    h3{
        font-size: 20px;
    }
    .title{
        font-size: 30px;
    }
    a {
        color: #42b983;
    }
    li{
        text-align: left;
    }
</style>
