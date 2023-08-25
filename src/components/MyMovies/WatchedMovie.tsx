import { MovieTypes } from "../../types/movieTypes";

type WatchedMovieProps = {
	movie: MovieTypes;
};

const WatchedMovie = ({ movie }: WatchedMovieProps) => {
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
					<span>{movie.runtime} min</span>
				</p>
			</div>
		</li>
	);
};
export default WatchedMovie;
