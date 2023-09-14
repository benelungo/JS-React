class PersonalMoviesDB {
    constructor(count, movies, actors, genres, private_state) {
        this.count = count;
        this.movies = movies;
        this.actors = actors;
        this.genres = genres;
        this.private = private_state;
    }

    askCountWatchedFilms() {
        while (true) {
            const numberOfFilms = +prompt('Number of watched films: ', '');
            if (numberOfFilms) {
                this.count = numberOfFilms;
                if (numberOfFilms <= 10)
                    alert('Good! We have a lot of movies to watch!');
                else if (numberOfFilms <= 50)
                    alert('Good job! A lot of movies was watched, but we have more for you!');
                else
                    alert('Good job! A lot of movies was watched! You are a total master!');
                break;}
            else
                alert('Please enter a number!');
        }
    }

    askLastWatchedFilmsExperience() {
        for (let i = 0; i < 2; i += 1) {
            let watchedMovie = this._askQuestion('Which last movie do you watch: ',
                'Please enter a movie name!(50 characters max)')
            let movieRating = this._askQuestion('Movie rating: ',
                'Please enter a movie rating in digits!(50 characters max)')
            this.movies[watchedMovie] = movieRating;
        }
    }

    _askQuestion(question, warning){
        let answer
        while (true) {
            answer = prompt(question, '');
            if(answer && answer.length <= 50) break;
            alert(warning);
        }
        return answer;
    }

}

const personalMoviesDB = new PersonalMoviesDB(
    null,
    {},
    [],
    [],
    false
)

personalMoviesDB.askCountWatchedFilms();
personalMoviesDB.askLastWatchedFilmsExperience();

console.log(personalMoviesDB);