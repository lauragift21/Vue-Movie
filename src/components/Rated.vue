<template>
	<div class="result">
      <div class="card">
        <div class="movie" v-for="rating in ratings" :key="rating.id">
          <div class="movie__poster">
            <img v-if="!noImage"  :src="url + rating.poster_path" alt="" class="poster">
            <img v-if="noImage" src="src/assets/no-image.png" height="2%">  
          </div>
          <div class="movie__title">
            <h4 style="color: #333">
              {{ rating.title }}            
            </h4>
          </div>
          <div>
            <p class="movie-date">{{ rating.release_date | formatDate}}</p>            
          </div>
        </div>
        </div>
      </div>
    </div>  
</template>

<<script>
import axios from 'axios'

export default {
  data() {
      return {
        ratings: []
      }
  },
  computed: {
		ratingResult(e) {
			axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
			.then(response => {
				this.ratings= response.data
			})
			.catch (e => {
				this.errors.push(e)
			})
			console.log('success');
		}
	}
		
}
</script>

<style scoped>
.movie__title{
	color: #000;
}
</style>

