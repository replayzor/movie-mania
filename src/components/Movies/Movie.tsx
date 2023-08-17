import {
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Typography,
} from "@mui/material";

type MovieProps = {
	movie: {
		Title: string;
		Year: string;
		Poster: string;
	};
};

const Movie = ({ movie }: MovieProps) => {
	return (
		<ListItem
			sx={{
				borderBottom: "1px solid var(--color-background-100)",
				padding: "1.6rem 3.2rem",
			}}
		>
			<ListItemAvatar>
				<Avatar
					sx={{ height: "6rem" }}
					variant="square"
					alt={`${movie.Title} poster`}
					src={movie.Poster}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={<Typography variant="h4">{movie.Title}</Typography>}
				secondary={
					<Typography
						component="div"
						variant="h5"
						sx={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
					>
						<Typography component="span" sx={{ fontSize: "1.6rem" }}>
							🗓
						</Typography>
						{` ${movie.Year}`}
					</Typography>
				}
			/>
		</ListItem>
	);
};

export default Movie;
