import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Nav from '../components/TopNav.vue'
import Login from '../components/left/Login.vue'
import Register from '../components/left/Register.vue'
import MainPage from '../components/MainPageListItem.vue'
import Editor from '../components/Editor.vue'
import Setting from '../components/left/Setting.vue'
import PostView from '../components/PostView.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'topnav',
    component: Nav,
    redirect: '/main',
    children: [
      { path: 'login', name: 'login', component: Login },
      { path: 'register', name: 'register', component: Register},
      { path: 'editor', name: 'editor', component: Editor },
      { path: 'main', name: 'main', component: MainPage },
      { path: 'setting', name: 'setting', component: Setting },
      { path: 'post/:id', name: 'post', component: PostView }
    
    
    
    ]
  },
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
