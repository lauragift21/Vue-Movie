import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Movie from './components/Movie'
import Popular from './components/Popular'


const routes = [
  {
    path: 'data/:type',
    components: {
      default: Movie,
      a: Popular,
      // b: TopRated
    } 
  }
]

const router = new VueRouter ({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
