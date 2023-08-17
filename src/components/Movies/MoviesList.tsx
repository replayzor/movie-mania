import { MovieTypes } from "../../types/movieTypes";
import Movie from "./Movie";

type MovieListProps = {
	movies: MovieTypes[];
};

const MoviesList = ({ movies }: MovieListProps) => {
	return (
		<ul className="list">
			{movies?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MoviesList;
