import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue';



const routes = [
 {path:'/' , component:Home},
 {path:'/resume' , component:()=>import('../pages/Resume.vue')},
 {path:'/projects' , component:()=>import('../pages/Projects.vue')},
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
