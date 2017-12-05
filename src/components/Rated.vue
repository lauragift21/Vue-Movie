<<template>
  
</template>

<<script>
import axios from 'axios'

export default {
  data() {
      return {
        rating: []
      }
  },
  created() {
		axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
			.then(response => {
				this.rating= response.data
			})
			.catch (e => {
				this.errors.push(e)
			})
			console.log('success');
		}

}
</script>
