import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/Signup.vue'
import Profil from '../views/Profil.vue'




Vue.use(VueRouter)
Vue.use(require('vue-moment'));

const routes = [  
  {
    path: '/',
    name: 'Login',
    component: Login,
  },  
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    }, 
    {
      path: '/profil',
      name: 'Profil',
      component: Profil,
    },     
    
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router
  