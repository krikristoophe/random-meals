import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import(/* webpackChunkName: "meal" */ '@/views/RandomMeal.vue'),
  },
  {
    path: '/meal/:id',
    name: 'MealById',
    component: () => import(/* webpackChunkName: "meal" */ '@/views/MealById.vue'),
  }, {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/SearchView.vue'),
  }, {
    path: '/country/:area',
    name: 'MealsByCountry',
    component: () => import(/* webpackChunkName: "country-meal" */ '@/views/MealsByCountry.vue'),
  }, {
    path: '/category/:category',
    name: 'MealsByCategory',
    component: () => import(/* webpackChunkName: "category-meal" */ '@/views/MealsByCategory.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
