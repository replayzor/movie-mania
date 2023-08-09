import { Typography } from "@mui/material";

type MoviesResultsProps = {
	movies: {
		imdbID: string;
		Title: string;
		Year: string;
		Poster: string;
	}[];
};
const MoviesResults = ({ movies }: MoviesResultsProps) => {
	return (
		<Typography
			variant="body1"
			sx={{
				justifySelf: "end",
				fontSize: "1.8rem",
			}}
		>
			Found <strong>{movies.length}</strong> results
		</Typography>
	);
};
export default MoviesResults;