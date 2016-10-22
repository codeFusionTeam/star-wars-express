var moviesJSON = require('../movies.json');
var movies = moviesJSON.movies;

// Home

exports.home = function(req, res) {
    res.render('index', {
        title: "Star Wars Movies",
        movies: movies
    });
};

// movie_single
exports.movie_single =  function(req, res) {
    var episode_number = req.params.episode_number;
    
    if (episode_number >= 1 && episode_number <= 6) {
        
        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;
        
        res.render('movie_single', {
            movies: movies,
            movie: movie,
            title: title
        })
    } else {
        res.send('<h1>404: Page Not Found</h1><br><img src="https://cdn.meme.am/instances/57896509.jpg">')
    }
};

// Not Found : 404
exports.notFound =  function(req, res) {
    res.send('<h1>404: Page Not Found</h1>');
};