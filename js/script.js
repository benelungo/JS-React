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
    let watchedMovie = askQuestion('Which last movie do you watch: ', 'Please enter a movie name!(50 characters max)')
    let movieRating = askQuestion('Movie rating: ', 'Please enter a movie rating in digits!(50 characters max)')

    personalMoviesDB.movies[watchedMovie] = movieRating;
}

console.log(personalMoviesDB);

function askQuestion(question, warning){
    let answer
    while (true) {
        answer = prompt(question, '');
        if(answer && answer.length <= 50) break;
        alert(warning);
    }
    return answer;
}
