import { createWebHistory, createRouter } from 'vue-router';

import Form from './../components/Form/index.vue';

import Calculations from './../pages/Calculations/index.vue';
import CalculationList from './../components/CalculationList/index.vue';
import CalculationCard from './../components/CalculationCard/index.vue';

const router = new createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/mat_vvoda', name: 'Home', component: Form },
    {
      path: '/calculations',
      name: 'calculations',
      component: Calculations,
      children: [
        {
          path: '/calculations/',
          name: 'calculation-list',
          component: CalculationList,
        },
        {
          path: '/calculations/:id',
          name: 'calculation-card',
          component: CalculationCard,
        },
      ],
    },
  ],
});

export default router;
