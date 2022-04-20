<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      this.movies = response.data;
      console.log(response.data);
    });
  },
};
</script>

<template>
  <h1>Movies</h1>
  <div v-for="movie in movies" :key="movie.id">
    <h2>{{ movie.title }}</h2>
    <h3>{{ movie.plot }}</h3>
    <a :href="`/movieshow/${movie.id}`">click for more info</a>
  </div>
</template>
