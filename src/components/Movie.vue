<template>
  <!-- Search Bar  -->
  <section class="movie-search">
    <div class="text-field">
      <input type="text" class="search" 
        v-model.trim="query"
        @keyup="fetch" 
        placeholder="Search for movie"
      />
      <button class="btn search_area" @click="fetch">Search</button>     
    </div>
    <!-- Movie Results -->
    <div class="result" v-show="!noMovieFound">
      <div class="card">
        <div class="movie" v-for="movie in movies" :key="movie.id">
          <div class="movie__poster">
            <!-- conditionally display poster image if it exist else display default image -->
             <img v-if="movie.poster_path !== null" :src="posterPath(movie.poster_path)" class="poster">
             <img v-if="movie.poster_path== null" src="../assets/noImage.png" height="270px">
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
    <div v-show="noMovieFound">
      <h3 class="no-result">
        No result found.
      </h3>
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
        noMovieFound: false,
        url: 'http://image.tmdb.org/t/p/w185//',
      }      
    },
    mounted() {
      this.fetch()
    },
    methods: {
      fetch() {
        let api = ''
        if(this.query === ''){
          api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=b&page=1&include_adult=false`;
        } else {
          api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this.query}&page=1&include_adult=false`;
        }
          // method used to display data from imdb api
        axios.get(api).then(response => {
          if(response.data.results.length > 0){
            this.movies = response.data.results
            this.noMovieFound = false
          } else {
            this.noMovieFound = true
          }
          console.log(this.noMovieFound)
        })
        .catch (e => {
          console.log(error);
        });
      },
      // Adding a method for posterPath
      posterPath(posterPath) {
          var newPath = this.url + posterPath;
           console.log(newPath)
          return newPath
      },
    },
    filters: {
      // filter the date object to display month and year
      formatDate(value) {
        if(value){
          return moment(String(value)).format('MMM YYYY')
        }
      }
    }
  }
</script>
