import './MovieCard.css';

function MovieCard({poster, title, runTime, genre}) {
    return (
        <div className="movie-card">
            <img className="bg-img" src={poster} alt="" />
            <div className="info">
                <p className="title">{title}</p>
                <p className="duration"> Duration: {runTime}</p>
                <p className="genre">{genre.join(' - ')} </p>
            </div>
        </div>
    );
}

export default MovieCard;
