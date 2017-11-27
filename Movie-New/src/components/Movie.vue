<template>
     <!-- Search Bar  -->
      <section class="wrapper">
          <input type="text" class="search" v-model="query">
          <button class="btn search_area" type="submit">Search</button>
      </section>
      </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        query: '',
        movie: ''
      }
    },
    created() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1&include_adult=false')
        .then(response => {
          this.search = response.data
        })
        .catch (e => {
          this.errors.push(e)
        })
        console.log('success');

    }
  }
</script>
