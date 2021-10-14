import { createWebHistory, createRouter } from 'vue-router';
import About from '../views/about.vue';
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
    path: '/about',
    name: 'About',
    component: About,
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
