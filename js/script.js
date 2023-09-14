const numberOfFilms = +prompt('Number of watched films: ', '');
const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};


for (let i = 0; i < 2; i += 1) {
    let watchedMovie = prompt('Which last movie do you watch: ', '');
    let movieRating = +prompt('Movie rating: ', '');

    personalMoviesDB.movies[watchedMovie] = movieRating;

    if (!movieRating) {
      i--;
    }
}

console.log(personalMoviesDB);

