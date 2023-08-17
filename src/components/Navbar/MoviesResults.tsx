import { Typography } from "@mui/material";
import { Movie } from "../../types/movieTypes";

type MoviesResultsProps = {
	movies: Movie[];
};

const MoviesResults = ({ movies }: MoviesResultsProps) => {
	return (
		<Typography variant="body1" sx={{ justifySelf: "end", fontSize: "1.8rem" }}>
			Found <strong>{movies.length}</strong> results
		</Typography>
	);
};
export default MoviesResults;
