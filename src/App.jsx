import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import database from './database/database';

function App() {
    return (
        <>
            <Header />
            <div className="movies-gallery">
                <MovieCard
                    title={database[1].title}
                    genre={database[1].genre}
                    poster={database[1].poster}
                    runTime={database[1].runTime}
                />
                <MovieCard
                    title={database[7].title}
                    genre={database[7].genre}
                    poster={database[7].poster}
                    runTime={database[7].runTime}
                />
                <MovieCard
                    title={database[20].title}
                    genre={database[20].genre}
                    poster={database[20].poster}
                    runTime={database[20].runTime}
                />
                <MovieCard
                    title={database[10].title}
                    genre={database[10].genre}
                    poster={database[10].poster}
                    runTime={database[10].runTime}
                />
                <MovieCard
                    title={database[5].title}
                    genre={database[5].genre}
                    poster={database[5].poster}
                    runTime={database[5].runTime}
                />
            </div>
        </>
    );
}

export default App;
