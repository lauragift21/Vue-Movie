<template>
  <div class="container">
      <!-- Navigation -->
      <section class="nav">
        <header class="top_bar">
          <nav class="nav_bar">
            <div class="nav_bar_left">
              <div class="svg">
                <img src="logo.png" alt="MOVIE TRIGGERS">
              </div>
            </div>
            <div class="nav_bar_right">
              <ul class="list_movie">
                <li><a href="/">Top Rated</a></li>
                <li><router-link to="/Popular">Popular</router-link></li>
                <li><a href="/">Home</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </section>
      <!-- Search Bar  -->
      <section>
          <input type="text" class="search">
          <button class="btn search_area" type="submit">Search</button>
      </section>
      </div>
</template>

<script>	
  import axios from 'axios';
  
  export default {
    name: 'app',
    data: function () {
      return {
        search: [],
        errors: []
      };  
    },
    created() {
    // popular
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
    // top rated
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
        .then(response => {
          this.search = response.data
        })
        .catch (e => {
          this.errors.push(e)
        })
      }

    }
</script>