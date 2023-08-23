import { useState } from "react";

// data
import { fetchMovies } from "./utils/helpers";

// components
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import MoviesResults from "./components/Navbar/MoviesResults";
import Search from "./components/Navbar/Search";
import MoviesList from "./components/Movies/MoviesList";
import Box from "./components/BoxContainer";
import WatchedSummary from "./components/MyMovies/WatchedSummary";
import WatchedList from "./components/MyMovies/WatchedList";

import { useQuery } from "react-query";

import { MovieTypes } from "./types/movieTypes";
import MovieDetails from "./components/Movies/MovieDetails";

function App() {
	const [query, setQuery] = useState<string>("");
	const [watched, setWatched] = useState<MovieTypes[]>([]);
	const [selectedId, setSelectedId] = useState<string | null>(null);

	const movieQuery = useQuery({
		queryKey: ["movies", query],
		queryFn: () => fetchMovies(query),
	});

	const { data, isLoading, isError } = movieQuery;

	const movies = data?.Search || [];

	const handleSelectedMovie = (id: string) => {
		setSelectedId((selectedId) => (selectedId === id ? null : id));
	};

	const handleCloseMovie = () => {
		setSelectedId(null);
	};

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
						<MovieDetails onClose={handleCloseMovie} selectedId={selectedId} />
					)}
					{!selectedId && (
						<>
							<WatchedSummary watched={watched} />
							<WatchedList watched={watched} />
						</>
					)}
				</Box>
			</Main>
		</>
	);
}

export default App;
