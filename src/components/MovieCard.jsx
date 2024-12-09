import './MovieCard.css';

function MovieCard() {
    return (
        <div className="movie-card">
            <img className="bg-img" src="https://dummyimage.com/720x1280/777/aaa" alt="" />
            <div className="">
                <p className="title">title</p>
                <p className="duration"> Duration: </p>
                <p className="genre"> </p>
            </div>
        </div>
    );
}

export default MovieCard;
