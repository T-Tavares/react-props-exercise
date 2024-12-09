import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import database from './database/database';

function App() {
    return (
        <>
            <Header />
            <div className="movies-gallery">
                {database.map(movie => {
                    const {title, genre, runTime, poster} = movie;
                    return <MovieCard key={movie.id} title={title} genre={genre} runTime={runTime} poster={poster} />;
                })}
            </div>
        </>
    );
}

export default App;
