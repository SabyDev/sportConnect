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
    name: 'LogIn',
    component: Login,
  },  
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    }, 
    {
      path: '/profil',
      name: 'ProfilUser',
      component: Profil,
    },     
    
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router
  