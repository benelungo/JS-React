const PersonalMoviesDB = {
    count: 0,
    movies: {},
    actors: [],
    genres: [],
    private_state: false,
    showMyDB() {
        if (!this.private_state) {
            console.log(this);
        }
    },
    askCountWatchedFilms: function() {
        const numberOfFilms = this._askQuestionDigit('Number of watched films: ',
            'Please enter a number!');

        this.count = numberOfFilms;

        if (numberOfFilms <= 10)
            alert('Good! We have a lot of movies to watch!');
        else if (numberOfFilms <= 50)
            alert('Good job! A lot of movies was watched, but we have more for you!');
        else
            alert('Good job! A lot of movies was watched! You are a total master!');
    },
    askLastWatchedFilmsExperience: function() {
        for (let i = 0; i < 2; i += 1) {
            let watchedMovie = this._askQuestionString('Which last movie do you watch: ',
                'Please enter a movie name!')
            let movieRating = this._askQuestionDigit('Movie rating: ',
                'Please enter a movie rating in digits!')
            this.movies[watchedMovie] = movieRating;
        }
    },
    askAboutGenres: function() {
        for (let i = 0; i < 3; i += 1) {
            let genre = this._askQuestionString('Which genre do you like: ',
                'Please enter a genre name!',
                50);
            this.genres.push(genre);
        }
    },
    _askQuestionString: function(question, warning, maxLength){
        let answer
        while (true) {
            answer = prompt(question, '').trim();
            if(answer && (!maxLength || answer.length <= maxLength)) return answer;
            if (maxLength) warning += `\nMax length is ${maxLength} characters!`;
            alert(warning);
        }
    },
    _askQuestionDigit: function(question, warning){
        let answer
        while (true) {
            answer = +prompt(question, '').trim();
            if(answer) return answer;
            alert(warning);
        }
    }
}

const personalMoviesDB = Object.create(PersonalMoviesDB)


