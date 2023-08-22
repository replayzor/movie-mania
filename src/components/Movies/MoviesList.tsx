import { MovieTypes } from "../../types/movieTypes";
import Loading from "../Loading";
import Movie from "./Movie";

type MovieListProps = {
	movies: MovieTypes[];
	isLoading: boolean;
	isError: boolean;
};

const MoviesList = ({ movies, isLoading, isError }: MovieListProps) => {
	if (isLoading) {
		return <Loading />;
	}

	if (!movies.length) {
		return (
			<div className="error-container">
				<h1>No movies found</h1>
				<p>Sorry, we could not find any movies with that name.</p>
			</div>
		);
	}

	if (isError) {
		return (
			<div className="error-container">
				<h1>Error loading movies</h1>
				<p>Sorry, we encountered an error while loading movies.</p>
			</div>
		);
	}

	return (
		<ul className="list">
			{movies?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MoviesList;
