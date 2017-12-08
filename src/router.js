import VueRouter from 'vue-router'
import HomeView from './views/Home.vue'
import GeneratorView from './views/Generator.vue'
import AddView from './views/Add.vue'

const routes = [
   { path: '/', component: HomeView },
   { name : "generator", path: '/generator/:id', component: GeneratorView },
   //{ path: '/list', component: ListView },
   { path: '/add', component: AddView }
];

const router = new VueRouter({
   routes
});

export default router
