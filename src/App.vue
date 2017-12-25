<template>
  <div id="app" v-cloak>
    <!-- Navigation -->
    <section class="nav">
      <header class="top_bar">
        <nav class="nav_bar">
          <div class="nav_bar_left">
            <div class="svg">
              <router-link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="4095.5 47.533 100.04 42.267" class="svg">
                    <path id="path-10" class="cls-1" d="M26.063,41.267H0V25.375a5.041,5.041,0,0,0,4.691-4.938A5.041,5.041,0,0,0,0,15.5V0H26.116a2.606,2.606,0,0,0,2.554,2.064A2.606,2.606,0,0,0,31.224,0H99.04V15.475a5.315,5.315,0,0,0-3.684,1.455,4.812,4.812,0,0,0-1.528,3.507A5.1,5.1,0,0,0,99.04,25.4V41.266H31.276a2.548,2.548,0,0,0-.765-1.823,2.611,2.611,0,0,0-4.448,1.823Zm2.607-10.833a1.548,1.548,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,30.434Zm0-7.738a1.548,1.548,0,1,0,1.564,1.548A1.558,1.558,0,0,0,28.669,22.7Zm0-7.737a1.547,1.547,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,14.959Zm0-7.738a1.548,1.548,0,1,0,1.564,1.547A1.557,1.557,0,0,0,28.669,7.222Z" transform="translate(4096 48.033)"/>
                  </svg>
                  <sup style="font-size: 13px; letter-spacing: 4px;">MOVIE TRIGGERS</sup>
              </router-link>
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
    
    <transition name="pop">
      <router-view></router-view>   
    </transition>

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

