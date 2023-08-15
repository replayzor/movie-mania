import { Movie } from "../../types/movieTypes";
import { filterAndCalculateAverage } from "../../utils/helpers";

type WatchedSummaryProps = {
	watched: Movie[];
};

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
	const avgImdbRating = filterAndCalculateAverage(
		watched.map((movie) => movie.imdbRating)
	);
	const avgUserRating = filterAndCalculateAverage(
		watched.map((movie) => movie.userRating)
	);
	const avgRuntime = filterAndCalculateAverage(
		watched.map((movie) => movie.runtime)
	);

	return (
		<div className="summary">
			<h2>Movies you watched</h2>
			<div>
				<p>
					<span>#️⃣</span>
					<span>{watched.length} movies</span>
				</p>
				<p>
					<span>⭐️</span>
					<span>{avgImdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{avgUserRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
};
export default WatchedSummary;
