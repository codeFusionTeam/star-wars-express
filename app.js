var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// Routes

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.get('/', routes.home);

// movie_single
app.get('/episode/:episode_number', routes.movie_single);

app.get('*', routes.notFound);

app.listen(8080, function() {
    console.log('Running on port 3000...');
});