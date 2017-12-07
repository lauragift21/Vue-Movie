<template>
  <div id="app" v-cloak>
    <!-- Navigation -->
    <section class="nav">
      <header class="top_bar">
        <nav class="nav_bar">
          <div class="nav_bar_left">
            <div class="svg">
              <a href="/"><img src="logo.png" alt="MOVIE TRIGGERS"></a>
            </div>
          </div>
          <div class="nav_bar_right">
            <ul class="list_movie">
              <router-link class="link" to="/popular">Popular</router-link> |
              <router-link class="link" to="/top-rated">Top Rated</router-link>
            </ul>
          </div>
        </nav>
      </header>
    </section>
    <Movie></Movie>
    <Popular></Popular>
  <router-view></router-view>   
  </div>
</template>

<script>
  import axios from 'axios'
  import Popular from './components/Popular'
  import Movie from './components/Movie'
  import Rated from './components/Rated'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: { 
      Movie, 
      Popular,
      Rated
    }
  }
</script>

