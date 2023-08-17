import { MovieTypes } from "../../types/movieTypes";

type MoviesResultsProps = {
	movies: MovieTypes[];
};

const MoviesResults = ({ movies }: MoviesResultsProps) => {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
	);
};
export default MoviesResults;
