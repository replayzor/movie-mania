import { useState, useEffect } from "react";
import { useQuery } from "react-query";

// utils
import { fetchMovies } from "./utils/helpers";
import { MovieTypes } from "./types/movieTypes";

// components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import MoviesResults from "./components/Navbar/MoviesResults";
import Search from "./components/Navbar/Search";
import MoviesList from "./components/Movies/MoviesList";
import Box from "./components/BoxContainer";
import WatchedSummary from "./components/MyMovies/WatchedSummary";
import WatchedList from "./components/MyMovies/WatchedList";
import MovieDetails from "./components/Movies/MovieDetails";

const getWatchedMovies = JSON.parse(localStorage.getItem("watched") || "[]");

function App() {
	const [query, setQuery] = useState<string>("");
	const [watched, setWatched] = useState<MovieTypes[]>(getWatchedMovies);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const movieQuery = useQuery({
		queryKey: ["movies", query],
		queryFn: () => fetchMovies(query),
	});

	const { data, isLoading, isError } = movieQuery;

	const movies = data?.Search || [];

	const handleSelectedMovie = (id: string) => {
		setSelectedId((newSelectedId) => (newSelectedId === id ? null : id));
	};

	const handleCloseSelectedMovie = () => {
		setSelectedId(null);
	};

	const handleAddWatched = (movie: MovieTypes) => {
		setWatched((watched) => [...watched, movie]);

		setQuery("");
	};

	const handleDeleteWatched = (id: string) => {
		const newWatched = watched.filter((movie) => movie.imdbID !== id);
		setWatched(newWatched);
	};

	useEffect(() => {
		localStorage.setItem("watched", JSON.stringify(watched));
	}, [watched]);

	useEffect(() => {
		handleCloseSelectedMovie();
	}, [query]);
	return (
		<>
			<Navbar movies={movies}>
				<Search query={query} setQuery={setQuery} />
				<MoviesResults movies={movies} />
			</Navbar>

			<Main>
				<Box>
					<MoviesList
						onSelectMovie={handleSelectedMovie}
						isError={isError}
						isLoading={isLoading}
						movies={movies}
					/>
				</Box>

				<Box>
					{selectedId && (
						<MovieDetails
							onAddWatched={handleAddWatched}
							onCloseMovie={handleCloseSelectedMovie}
							selectedId={selectedId}
							watched={watched}
						/>
					)}
					{!selectedId && (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList
								onDeleteWatched={handleDeleteWatched}
								watched={watched}
							/>
						</>
					)}
				</Box>
			</Main>
		</>
	);
}

export default App;
