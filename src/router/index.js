import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CharacterDetail from '../views/CharacterDetail.vue';
import Favourites from '../views/Favourites.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/personnages',
    name: 'Personnages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personnages.vue'),
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites,
  },
  {
    path: '/:id',
    name: 'characterDetail',
    component: CharacterDetail,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
