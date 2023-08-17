import { List } from "@mui/material";

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
		<List>
			{movies?.map((movie) => (
				<Movie key={movie.imdbID} movie={movie} />
			))}
		</List>
	);
};

export default MoviesList;
