<template>
<div class="result">
	<h2 class="text-title">POPULAR MOVIES</h2> 
	<div class="card">
		<div class="movie" v-for=" popular in results" :key="popular.id">
			<div class="movie_poster">
          <img v-if="!noImage" :src="url + popular.poster_path" alt="" class="poster">
          <img v-if="noImage" src="src/assets/no-image.png" height="2%">  
			</div>
			<div class="movie__title">
			  <h4 style="color: #333">
          {{ popular.title }}            
        </h4>
			</div>
			<div>
          <p class="movie-date">{{ popular.release_date | formatDate}}</p>            
        </div>
		</div>
	</div>
</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

  export default {
		prop: ['popular'],
		data() {
			return {
				results: [],
				url: 'http://image.tmdb.org/t/p/w185//'
			}
		},
		mounted() {
			this.getPopularMovie()
		},
		methods: {
			// method for quering movie api
			getPopularMovie() {
				let api = `https://api.themoviedb.org/3/movie/popular?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1`; 
				axios.get(api).then(response => {
					this.results = response.data.results
				})
				.catch (e => {
					console.log(error);
				})
			},
			// Adding a method for posterPath
      posterPath(posterPath) {
          var newPath = this.url + posterPath;
           console.log(newPath)
          return newPath
      },
		},
		filters: {
			//  date filter for movie format
		  formatDate(value) {
		    if(value){
		      return moment(String(value)).format('MMM YYYY')
		    }
		  }
		}
	}	
</script>
