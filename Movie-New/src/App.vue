<template>
  <div id="app">
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
                <router-link class="link" to="/popular" name="a">Popular</router-link> |
                <router-link class="link" to="/top-rated" name="b">Top Rated</router-link>
              </ul>
            </div>
          </nav>
        </header>
      </section>

      <Movie></Movie>
 
  <router-view></router-view> 

  </div>
</template>

<script>
  import axios from 'axios'
  import Popular from './components/Popular'
  import Movie from './components/Movie'
  export default {
    name: 'app',
    data () {
      return {
        type: this.$route.params.type,
        errors: [],
      }
    },
    components: {
      Movie
    }


  }
</script>

