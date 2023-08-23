import { useQuery } from "react-query";
import { fetchMovieDetails } from "../../utils/helpers";
import Loading from "../Loading";

type MovieDetailsProps = {
	selectedId: string;
	onClose: (id: string | null) => void;
};

function MovieDetails({ selectedId, onClose }: MovieDetailsProps) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["details", selectedId],
		queryFn: () => fetchMovieDetails(selectedId),
	});

	// Check if loading
	if (isLoading) {
		return <Loading />;
	}

	// Handle error state
	if (isError) {
		return (
			<div className="error-container">
				<h1>Error loading movie details</h1>
				<p>Sorry, we encountered an error while loading movie details.</p>
			</div>
		);
	}

	if (!data) {
		return null;
	}

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = data;

	console.log(title, year);

	return (
		<div className="details">
			<header>
				<button className="btn-back" onClick={() => onClose(null)}>
					&larr;
				</button>
				<img src={poster} alt={`Poster of ${title}`} />
				<div className="details-overview">
					<h2>{title}</h2>
					<p>
						{released} &bull; {runtime}
					</p>
					<p>{genre}</p>
					<p>
						<span>⭐</span>
						{imdbRating}
					</p>
				</div>
			</header>
			{selectedId}
		</div>
	);
}
export default MovieDetails;
