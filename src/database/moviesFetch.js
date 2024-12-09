// ------------------------------------------------------ //
// ------- QUICK FUNCTION TO FETCH MULTIPLE MOVIES ------ //
// ------------- AND SAVE THEM TO A JS FILE ------------- //
// ------------------------------------------------------ //

import fs from 'fs';

const database = [];

const moviesList = [
    'Everything Everywhere All At Once',
    'The Batman',
    'Top Gun: Maverick',
    'Avatar: The Way of Water',
    'Barbie',
    'Oppenheimer',
    'Guardians of the Galaxy',
    'Spider-Man: Across the Spider-Verse',
    'The Super Mario Bros. Movie',
    'Mission: Impossible',
    'Black Panther: Wakanda Forever',
    'John Wick: Chapter 4',
    'Dune: Part Two',
    'The Whale',
    'The Fabelmans',
    'The Flash',
    'The Boy and the Heron',
    'The Marvels',
    'Ant-Man and the Wasp: Quantumania',
    'Nope',
    'The Boy and the Heron',
    'Talk to Me',
    'Poor Things',
    'Anatomy of a Fall',
    'Creed III',
    'The Banshees of Inisherin',
    'Pinocchio',
    'Nope',
    'The Woman King',
    'Everything Everywhere All at Once',
    'Black Panther: Wakanda Forever',
    'Avatar: The Way of Water',
    'Puss in Boots: The Last Wish',
    'Glass Onion: A Knives Out Mystery',
    'The Batman',
    'Top Gun: Maverick',
    'Thor: Love and Thunder',
    'Doctor Strange in the Multiverse of Madness',
    'The Whale',
    'Women Talking',
];

async function fetchMovies(moviesList) {
    const lowTitles = moviesList.map(title => title.toLowerCase().replaceAll(' ', '+'));
    const fetchPromisses = lowTitles.map(async title => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=3b8dec1a&t=${title}`);
        const data = await res.json();
        const formatedData = {
            title: data.Title,
            year: data.Year,
            released: data.Released,
            runTime: data.Runtime,
            genre: data.Genre.split(', '),
            director: data.Director,
            actors: data.Actors,
            language: data.Language,
            plot: data.Plot,
            poster: data.Poster,
        };
        database.push(formatedData);
    });
    await Promise.all(fetchPromisses);
}

async function saveMoviesDB() {
    await fetchMovies(moviesList);
    fs.writeFileSync('movies.js', JSON.stringify(database, null, 2));
}

saveMoviesDB();