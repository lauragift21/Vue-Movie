<template>
  <!-- Search Bar  -->
  <section class="movie-search">
    <div class="text-field">
      <input type="text" class="search" 
      v-model.trim="query"
      @keyup.enter="searchMovie" 
      placeholder="Search for movie"
      />
      <button class="btn search_area" @click="searchMovie">Search</button>     
    </div>
    <div class="result">
        <div class="card">
          <div class="movie" v-for="movie in movies" :key="movie.id">
            <div class="movie__poster">
              <img v-if="!noImage"  :src=" url + movie.poster_path" alt="" class="poster">
              <img v-if="noImage" src="assets/no-image.png">  
            </div>
            <div class="movie__title">
              <h3 style="color: #000">
                {{ movie.title }}            
              </h3>
            </div>
            <div class="movie__date">
              <p style="color: #333;">{{ movie.release_date}}</p>            
            </div>

          </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
  import axios from 'axios'
  import _ from 'lodash'
  
  export default {
    data() {
      return {
        query: '',
        movies: [],
        noImage: false,
        url: 'https://image.tmdb.org/t/p/w185/'
      }
    },
    methods: {
      searchMovie(e) {
        console.log(this.query);
        const api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this.query}&page=1&include_adult=false`;
        axios.get(api).then(response => {
          this.movies = response.data.results;
        })
        .catch (e => {
          this.error = 'No response data'
        });
      }
    },
  }
</script>
