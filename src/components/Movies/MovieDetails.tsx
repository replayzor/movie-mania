import { useQuery } from "react-query";
import { fetchMovieDetails } from "../../utils/helpers";
import Loading from "../Loading";
import StarRating from "../StarRating";
import { MovieTypes } from "../../types/movieTypes";
import { useState } from "react";

type MovieDetailsProps = {
	selectedId: string;
	onCloseMovie: (id: string | null) => void;
	onAddWatched: (movie: MovieTypes) => void;
	watched: MovieTypes[];
};

function MovieDetails({
	selectedId,
	onCloseMovie,
	onAddWatched,
	watched,
}: MovieDetailsProps) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["details", selectedId],
		queryFn: () => fetchMovieDetails(selectedId),
	});
	const [userRating, setUserRating] = useState<string>("");

	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

	// watchedUserRating const
	const watchedUserRating = watched.find(
		(movie) => movie.imdbID === selectedId
	)?.userRating;

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

	const handleAdd = () => {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ")[0]), // Corrected this line
			userRating,
		};

		onAddWatched(newWatchedMovie);
		onCloseMovie(null);
	};

	return (
		<div className="details">
			<header>
				<button className="btn-back" onClick={() => onCloseMovie(null)}>
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
			<section>
				<div className="rating">
					{!isWatched ? (
						<>
							{" "}
							<StarRating
								maxRating={10}
								size={24}
								onSetRating={(newRating) => setUserRating(String(newRating))}
							/>
							{Number(userRating) > 0 && (
								<button onClick={handleAdd} className="btn-add">
									Add to list
								</button>
							)}{" "}
						</>
					) : (
						<p>You rated this movie {watchedUserRating} out of 10 ⭐</p>
					)}
				</div>
				<p>
					<em>{plot}</em>
				</p>
				<p>Starring: {actors}</p>
				<p>Directed by {director}</p>
			</section>
		</div>
	);
}
export default MovieDetails;
