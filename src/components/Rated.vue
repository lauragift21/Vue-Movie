<template>
	<div class="result">
    <h2 class="text-title">
      TOP RATED MOVIES
    </h2>    
    <div class="card">
      <div class="movie" v-for="rating in ratings" :key="rating.id" @click="openModal(rating)"> 
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
    	<Modal :modalMovie="modalMovie" :posterPath="posterPath" v-show="showModal" :toggleModal="toggleModal"></Modal>
  </div> 
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  import Modal from './modal'

  export default {
    data() {
        return {
          ratings: [],
          noImage: false,
          showModal: false,
          modalMovie: null,
          url: 'http://image.tmdb.org/t/p/w185//'
        }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      fetch() {
        let api = `https://api.themoviedb.org/3/movie/top_rated?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1`
        axios.get(api).then(response => {
          this.ratings = response.data.results
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
      // adding modal component to movie
      openModal(movie) {
        this.toggleModal()
        console.log(movie);
        this.modalMovie = movie;
      },
      toggleModal() {
        this.showModal = !this.showModal
      }
    },
    filters: {
      formatDate(value) {
        if(value){
          return moment(String(value)).format('MMM YYYY')
        }
      }
    },
    components: { Modal}
	}
</script>


