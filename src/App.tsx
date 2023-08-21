import { useEffect, useState } from "react";

// data
import { tempMovieData, tempWatchedData } from "./data";

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
import Loading from "./components/Loading";
import { fetchMovies } from "./utils/helpers";

function App() {
	const [watched, setWatched] = useState([]);
	const query = "rick+and+morty";
	const { data, isLoading, isError } = useQuery("movies", () =>
		fetchMovies(query)
	);
	// const [movies, setMovies] = useState([]);

	const movies = data?.Search || [];

	return (
		<>
			<Navbar movies={movies}>
				<Search />
				<MoviesResults movies={movies} />
			</Navbar>

			<Main>
				<Box>
					<MoviesList isError={isError} isLoading={isLoading} movies={movies} />
				</Box>

				<Box>
					<WatchedSummary watched={watched} />
					<WatchedList watched={watched} />
				</Box>
			</Main>
		</>
	);
}
export default App;
