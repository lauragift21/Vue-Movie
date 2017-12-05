<template>
  <!-- Search Bar  -->
  <div>
    <input type="text" class="search" 
      v-model.trim="query"
      @keyup.enter="searchMovie" 
      placeholder="Search for movie"
    >
    <button class="btn search_area" @click="searchMovie">Search</button> 
  </div> 
</template>

<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        query: '',
        data: [],
        error: ''
      }
    },
    methods: {
      searchMovie(e) {
        console.log(this.query);

        const api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this.query}&page=1&include_adult=false`;

        axios.get(api).then(response => {
          this.search = response.data;
        })
        .catch (e => {
          this.error = 'No response data'
          this.data = []
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
