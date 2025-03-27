import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/list',
      //path: '/list/:id',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/tag',
      //path: '/list/:id',
      name: 'tag',
      component: () => import('../views/TagView.vue'),
    },
    {
      path: '/deadline',
      //path: '/deadline/:id',
      name: 'deadline',
      component: () => import('../views/DeadlineView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
