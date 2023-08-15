import Movie from "./Movie";

type MovieListProps = {
	movies: {
		imdbID: string;
		Title: string;
		Year: string;
		Poster: string;
	}[];
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
