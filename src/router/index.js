import Vue from 'vue';
import Router from 'vue-router';
import Recommend from '@/views/recommend';
import RankingList from '@/views/rankingList';
import Search from '@/views/search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/recommend',
      component: Recommend,
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: RankingList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
