import { MovieTypes } from "../../types/movieTypes";

type WatchedMovieProps = {
	movie: MovieTypes;
	onDeleteWatched: (id: string) => void;
};

const WatchedMovie = ({ movie, onDeleteWatched }: WatchedMovieProps) => {
	const imdbRating =
		movie.imdbRating !== undefined ? movie.imdbRating.toFixed(1) : "N/A";

	return (
		<li>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{imdbRating !== "NaN" ? imdbRating : "N/A"}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{isNaN(movie.runtime!) ? "N/A" : `${movie.runtime} min`}</span>
				</p>
				<button
					className="btn-delete"
					onClick={() => onDeleteWatched(movie.imdbID)}
				>
					X
				</button>
			</div>
		</li>
	);
};
export default WatchedMovie;
