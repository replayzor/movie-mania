import { useEffect, useState } from "react";
import { MovieTypes } from "../../types/movieTypes";
import Loading from "../Loading";
import Movie from "./Movie";

type MovieListProps = {
	movies: MovieTypes[];
	isLoading: boolean;
	isError: boolean;
	onSelectMovie: (id: string) => void;
};

const MoviesList = ({
	movies,
	isLoading,
	isError,
	onSelectMovie,
}: MovieListProps) => {
	const [hasSearched, setHasSearched] = useState(false);

	useEffect(() => {
		if (movies.length > 0) {
			setHasSearched(true);
		}
	}, [movies]);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return (
			<div className="error-container">
				<h1>Error loading movies</h1>
				<p>Sorry, we encountered an error while loading movies.</p>
			</div>
		);
	}

	if (!hasSearched) {
		return (
			<div className="error-container">
				<h1>Start by searching for a movie.</h1>
			</div>
		);
	}

	if (movies.length === 0) {
		return (
			<div className="error-container">
				<h1>No movies found</h1>
				<p>Sorry, we could not find any movies with that name.</p>
			</div>
		);
	}

	return (
		<ul className="list list-movies">
			{movies?.map((movie) => (
				<Movie onSelectMovie={onSelectMovie} key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MoviesList;
