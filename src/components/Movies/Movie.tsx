type MovieProps = {
	movie: {
		Title: string;
		Year: string;
		Poster: string;
	};
};

const Movie = ({ movie }: MovieProps) => {
	return (
		<li>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
};
export default Movie;
