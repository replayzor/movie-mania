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
import axios from "axios";

const KEY = "5260199b";

const fetchMovies = async () => {
	const response = await axios(
		`http://www.omdbapi.com/?apikey=${KEY}&s=snatch`
	);
	const data = response.data;
	return data;
};

function App() {
	const { data, isLoading, isError } = useQuery("movies", fetchMovies);
	// const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState(tempWatchedData);

	const movies = data?.Search || [];

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (isError) {
		return <h1>Error loading movies </h1>;
	}

	return (
		<>
			<Navbar movies={movies}>
				<Search />
				<MoviesResults movies={movies} />
			</Navbar>

			<Main>
				<Box>
					<MoviesList movies={movies} />
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
