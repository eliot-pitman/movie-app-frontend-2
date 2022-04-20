<script>
import axios from "axios";

export default {
  data: function () {
    return { movie: {} };
  },
  created: function () {
    axios.get("http://localhost:3000/movies/" + this.$route.params.id + ".json").then((response) => {
      this.movie = response.data;
      console.log("show movie", response.data);
    });
  },
};
</script>

<template>
  <div>
    <h1>Title: {{ movie.title }}</h1>
    <h2>Plot: {{ movie.plot }}</h2>
    <h3>Year released: {{ movie.year }}</h3>
    <h4>Director: {{ movie.director }}</h4>
  </div>
  <a href="/movies">back to movies</a>
  |
  <a :href="`/moviesupdate/${movie.id}`">update movie</a>
</template>
