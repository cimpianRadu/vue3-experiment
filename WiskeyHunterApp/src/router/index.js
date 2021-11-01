import { createWebHistory, createRouter } from 'vue-router';
import Random from '../views/random.vue';
import Home from '../views/home.vue';
import Auctions from '../views/auctions.vue';
import Distilleries from '../views/distilleries.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/random',
    name: 'Random',
    component: Random,
  },
  {
    path: '/auctions',
    name: 'auctions',
    component: Auctions,
  },
  {
    path: '/distilleries',
    name: 'Distilleries',
    component: Distilleries,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
