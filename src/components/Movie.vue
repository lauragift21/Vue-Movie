<template>
  <!-- Search Bar  -->
  <section class="movie-search">
    <h1 style="color: #333; text-align: center; letter-spacing: 5px;">THE MOVIE TRIGGERS</h1>
    <p style="color: #333; text-align: center;">Search and browse through the largest collection of movies.</p>
    <div class="text-field">
      <input type="text" class="search" v-model.trim="query" @keyup.enter="fetch" placeholder="Search for movie..."/>
      </div>
      <button class="btn search_area" @click="fetch">Search</button>     
    
    <!-- Movie Results -->
    <div class="result" v-show="!noMovieFound">
        <a class="card">
            <div class="movie" v-for="movie in movies" :key="movie.id" :id="$route.params.id" @click="openModal(movie)">
                <div class="movie__poster">
                  <!-- conditionally display poster image if it exist else display default image -->
                  <img v-if="movie.poster_path !== null" :src="posterPath(movie.poster_path)" class="poster">
                  <img v-if="movie.poster_path == null" src="../assets/noImage.png" height="270px">
                </div>
              <div>
                <h4 class="movie-title">{{ movie.title }}</h4>
                <p class="movie-date">{{ movie.release_date | formatDate}}</p>            
              </div>
          </div>
        </a>
      
    </div>
    <div v-show="noMovieFound">
      <h3 class="no-result">
        No results found.
      </h3>
    </div>
    <router-view></router-view>
    <Modal :modalMovie="modalMovie" :posterPath="posterPath" v-show="showModal" :toggleModal="toggleModal"></Modal>
  </section> 
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

import Modal from './Modal'
import { buildUrl } from '../utils'

export default {
  prop: ['movie'],
  data() {
    return {
      query: '',
      movies: [],
      noMovieFound: false,
      modalMovie: null,
      showModal: false,
      url: 'http://image.tmdb.org/t/p/w185/'
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      let api = '';
      if (this.query === '') {
        api = `${buildUrl('search')}&query=b`;
      } else {
        api = `${buildUrl('search')}&query=${this.query}`;
        // api = `https://api.themoviedb.org/3/search/movie?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&query=${this
        //   .query}&page=1&include_adult=false`;
      }
      // method used to display data from imdb api
      axios
        .get(api)
        .then(response => {
          if (response.data.results.length > 0) {
            this.movies = response.data.results;
            console.log(this.movies);
            this.noMovieFound = false;
          } else {
            this.noMovieFound = true;
          }
          console.log(this.noMovieFound);
        })
        .catch(e => {
          console.log(error);
        });
    },
    // Adding a method for posterPath
    posterPath(posterPath) {
      var newPath = this.url + posterPath;
      console.log(newPath);
      return newPath;
    },
    openModal(movie) {
      this.toggleModal()
      console.log(movie);
      this.modalMovie = movie;
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  },
  computed: {
    kebabTitle() {
      return _.kebabCase(this.title);
    }
  },
  filters: {
    // filter the date object to display month and year
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MMM YYYY');
      }
    }
  },
  components: {
    Modal
  }
};
</script>
