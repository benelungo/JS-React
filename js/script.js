class PersonalMoviesDB {
    constructor(count, movies, actors, genres, isPrivate) {
        this.count = count;
        this.movies = movies;
        this.actors = actors;
        this.genres = genres;
        this.isPrivate = isPrivate;
    }

    showMyDB() {
        if (!this.isPrivate) {
            console.log(this);
        }
    }

    askCountWatchedFilms() {
        const numberOfFilms = this._askQuestionDigit('Number of watched films: ',
            'Please enter a number!');

        this.count = numberOfFilms;

        if (numberOfFilms <= 10)
            alert('Good! We have a lot of movies to watch!');
        else if (numberOfFilms <= 50)
            alert('Good job! A lot of movies was watched, but we have more for you!');
        else
            alert('Good job! A lot of movies was watched! You are a total master!');
    }

    askLastWatchedFilmsExperience() {
        for (let i = 0; i < 2; i += 1) {
            let watchedMovie = this._askQuestionString('Which last movie do you watch: ',
                'Please enter a movie name!')
            let movieRating = this._askQuestionDigit('Movie rating: ',
                'Please enter a movie rating in digits!')
            this.movies[watchedMovie] = movieRating;
        }
    }

    askAboutGenres() {
        for (let i = 0; i < 3; i += 1) {
            let genre = this._askQuestionString('Which genre do you like: ',
                'Please enter a genre name!',
                50);
            this.genres.push(genre);
        }
    }

    _askQuestionString(question, warning, maxLength){
        let answer
        while (true) {
            answer = prompt(question, '').trim();
            if(answer && (!maxLength || answer.length <= maxLength)) return answer;
            if (maxLength) warning += `\nMax length is ${maxLength} characters!`;
            alert(warning);
        }
    }
    _askQuestionDigit(question, warning){
        let answer
        while (true) {
            answer = +prompt(question, '').trim();
            if(answer) return answer;
            alert(warning);
        }
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
personalMoviesDB.askAboutGenres();
personalMoviesDB.showMyDB();