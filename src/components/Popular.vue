<template>

	<div class="card-title">
		<div class="box" v-for="(popular, index) in result" :popular="popular">
			<p style="color:#000">{{popular.title}}</p>

		</div>

	</div> 
</template>

<script>
	import axios from 'axios'

  export default {
		data() {
			return {
				result: [],
			}
		},
		created() {
			axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
				.then(response => {
					this.result= response.data
				})
				.catch (e => {
					this.errors.push(e)
				})
				console.log('success');
			}
    }
</script>
