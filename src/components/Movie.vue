<template>
     <!-- Search Bar  -->
      <section class="wrapper">
        <div class="wrapper">
          <input type="text" class="search" 
            v-model.trim="query"
            @keyup.enter="searchMovie" 
            placeholder="Search for movie"
          >
          <button class="btn search_area" @click="searchMovie">Search</button> 
        </div>
        <div v-for="movie in query" :key="movie">
          

        </div>

      </section>
</template>

<script>
  import axios from 'axios'
  import lodash from 'lodash'
  
  export default {
    data() {
      return {
        query: '',
      }
    },
    methods: {
      searchMovie(e) {
        console.log(this.query);

        axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this.query}&page=1&include_adult=false`)
        .then(response => {
          this.search = response.data;
        })
        .catch (e => {
          'error'
        });
      }
    },
    watch: {
      searchQuery(newQuery){
        this.searchMovie(newValue);
      }
    },
  }
</script>
