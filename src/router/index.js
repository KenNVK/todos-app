import { createRouter, createWebHistory } from 'vue-router';
import Todos from '../components/views/Todos';
import CompletedTodos from '../components/views/CompletedTodos';
import ActiveTodos from '../components/views/ActiveTodos';
import Error from '../components/views/Error';


const routes = [
  { path: '/', component: Todos },
  { path: '/completed', component: CompletedTodos },
  { path: '/active', component: ActiveTodos },
  { path: '/:pathMatch(.*)*', component: Error }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;