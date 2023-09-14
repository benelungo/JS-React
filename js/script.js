const numberOfFilms = +prompt('Number of watched films: ', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i += 1) {
    let watchedMovie;
    while (true) {
        watchedMovie = prompt('Which last movie do you watch: ', '');
        if(watchedMovie) break;
        alert('Please enter a movie name!');
    }
    let movieRating
    while (watchedMovie) {
        movieRating = +prompt('Movie rating: ', '');
        if (movieRating) break;
        alert('Please enter a movie rating in digits!')
    }
    personalMoviesDB.movies[watchedMovie] = movieRating;
}

console.log(personalMoviesDB);

