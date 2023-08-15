import { Typography } from "@mui/material";
import { Movie } from "../../types/movieTypes";

type MoviesResultsProps = {
	movies: Movie[];
};

const MoviesResults = ({ movies }: MoviesResultsProps) => {
	return (
		<Typography
			variant="body1"
			sx={{
				justifySelf: "end",
				fontSize: "1.6rem",
			}}
		>
			Found
			<Typography
				variant="h5"
				component="span"
				sx={{ fontWeight: "bold", letterSpacing: "1rem" }}
			>
				{" "}
				{movies.length}
			</Typography>
			results
		</Typography>
	);
};
export default MoviesResults;
