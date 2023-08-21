import { MovieTypes } from "../../types/movieTypes";
import { filterAndCalculateAverage } from "../../utils/helpers";

type WatchedSummaryProps = {
	watched: MovieTypes[];
};

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
	const avgImdbRating =
		watched.length > 0
			? filterAndCalculateAverage(watched.map((movie) => movie.imdbRating))
			: 0;

	const avgUserRating =
		watched.length > 0
			? filterAndCalculateAverage(watched.map((movie) => movie.userRating))
			: 0;

	const avgRuntime =
		watched.length > 0
			? filterAndCalculateAverage(watched.map((movie) => movie.runtime))
			: 0;

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
