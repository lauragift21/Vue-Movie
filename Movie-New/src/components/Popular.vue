<template>

   
</template>

<script>
import axios from 'axios'
import Movie from './Movie'
    export default {
        data() {
            return {
                popular: []
            }
        },
        created() {
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8e3003c0c81633dc53b9d15ffa3399e1&language=en-US&page=1')
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
