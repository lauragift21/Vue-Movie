<template>
<div class="result">
	<div class="card">
		<div class="movie" v-for="film in popular">
			<div class="movie_poster">
				<img :src="url + film.poster_path" alt="img">
			</div>
			<div class="movie__title">
			  <h4 style="color: #333">
          {{ film.title }}            
        </h4>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import axios from 'axios'
	import moment from 'moment'

  export default {
		prop: ['movie'],
		data() {
			return {
				popular: [],
				url: 'http://image.tmdb.org/t/p/w185//'
			}
		},
		methods: {
			popularMovie(e) {
				axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
					.then(response => {
						this.popular= response.data
					})
					.catch (e => {
						this.errors.push(e)
					})
					console.log('success');
				}
			}
		}
</script>
