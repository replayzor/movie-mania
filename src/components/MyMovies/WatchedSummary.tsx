import { MovieTypes } from "../../types/movieTypes";
import { filterAndCalculateAverage } from "../../utils/helpers";

type WatchedSummaryProps = {
	watched: MovieTypes[];
};

const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
	const imdbRatings = watched.map((movie) => movie.imdbRating ?? 0);
	const nonZeroImdbRatings = imdbRatings.filter((rating) => !isNaN(rating));
	const avgImdbRating =
		nonZeroImdbRatings.length > 0
			? filterAndCalculateAverage(nonZeroImdbRatings)
			: 0;

	const avgUserRating =
		watched.length > 0
			? filterAndCalculateAverage(
					watched.map((movie) => Number(movie.userRating))
			  )
			: 0;

	const avgRuntime =
		watched.length > 0
			? filterAndCalculateAverage(watched.map((movie) => Number(movie.runtime)))
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
					<span>{isNaN(avgImdbRating) ? "N/A" : avgImdbRating.toFixed(1)}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{isNaN(avgUserRating) ? "N/A" : avgUserRating.toFixed(1)}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>
						{isNaN(avgRuntime) ? "N/A" : `${avgRuntime.toFixed(1)} min`}
					</span>
				</p>
			</div>
		</div>
	);
};

export default WatchedSummary;
