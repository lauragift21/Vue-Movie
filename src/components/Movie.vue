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
    <!-- Movie Results -->
    <div class="result">
      <div class="card">
        <div class="movie" v-for="movie in movies" :key="movie.id">
          <div class="movie__poster">
            <img v-if="!noImage"  :src="url + movie.poster_path" alt="" class="poster">
            <img v-if="noImage" src="src/assets/no-image.png" height="2%">  
          </div>
          <div class="movie__title">
            <h4 style="color: #333">
              {{ movie.title }}            
            </h4>
          </div>
          <div>
            <p class="movie-date">{{ movie.release_date | formatDate}}</p>            
          </div>
        </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  
  export default {
    prop: ['movie'],
    data() {
      return {
        query: '',
        movies: [],
        noImage: false,
        url: 'http://image.tmdb.org/t/p/w185//'
      }
    },
    methods: {
      searchMovie(e) {
        const api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this.query}&page=1&include_adult=false`;
        axios.get(api).then(response => {
          this.movies = response.data.results  
        })
        .catch (e => {
          console.log(error);
        });
      },
      poster() {
        let result = this.movies;
        if(this.result){
          return url + this.result;
        } else {
          this.noImage = true;          
        }
          console.log(this.result);    
        
      },
    },
    filters: {
      formatDate(value) {
        if(value){
          return moment(String(value)).format('MMM YYYY')
        }
      }
    }
  }
</script>
