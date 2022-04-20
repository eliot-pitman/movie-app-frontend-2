<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentMovie: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
      this.currentMovie = response.data;
      console.log("show/update movie", response.data);
    });
  },
  methods: {
    updateMovie: function (movie) {
      var editMovieParams = movie;
      axios.patch("http://localhost:3000/movies/" + movie.id + ".json", editMovieParams).then((response) => {
        console.log("success", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("http://localhost:3000/movies/" + movie.id + ".json").then((response) => {
        console.log("successfully deleted", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <h1>Movie Info</h1>
  <p id="movie-id">title:</p>
  <input type="text" v-model="currentMovie.title" />
  <p id="movie-id">year:</p>
  <input type="text" v-model="currentMovie.year" />
  <p id="movie-id">plot:</p>
  <input type="text" v-model="currentMovie.plot" />
  <br />
  <button @click="updateMovie(currentMovie)">Update</button>
  <button @click="destroyMovie(currentMovie)">Delete</button>
</template>
