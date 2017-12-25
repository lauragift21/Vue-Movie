import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'

Vue.use(VueRouter)
Vue.use(VuePaginate)

import App from './App.vue'
import Movie from './components/Movie'
import Rated from './components/Rated'
import Popular from './components/Popular'
import MovieDetails from './components/MovieDetails'

//TODO: move this route into a different file and separate the paths.
const routes = [
  { path: '/', component: Movie },
  { path: '/movie/:id/', component: MovieDetails },
  { path: '/popular', component: Popular },
  { path: '/top-rated', component: Rated } 
]

const router = new VueRouter ({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
