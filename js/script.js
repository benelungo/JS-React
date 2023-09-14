const personalMoviesDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const numberOfFilms = +prompt('Number of watched films: ', '');
if (numberOfFilms) {
    personalMoviesDB.count = numberOfFilms;
    if (numberOfFilms<=10)
        alert('Good! We have a lot of movies to watch!');
    else if (numberOfFilms<=50)
        alert('Good job! A lot of movies was watched, but we have more for you!');
    else
        alert('Good job! A lot of movies was watched! You are a total master!');
}

for (let i = 0; i < 2; i += 1) {
    let watchedMovie;
    while (true) {
        watchedMovie = prompt('Which last movie do you watch: ', '');
        if(watchedMovie && watchedMovie.length <= 50) break;
        alert('Please enter a movie name!(50 characters max)');
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

