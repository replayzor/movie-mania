import { useState } from "react";

// data
import { tempMovieData, tempWatchedData } from "./data";

// components
import Navbar from "./components/Navbar/Navbar";
import MoviesSearchList from "./components/Movies/MoviesSearchList";
import WatchedMovies from "./components/MyMovies/WatchedMovies";

function App() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);

	return (
		<>
			<Navbar movies={movies} />

			<main className="main">
				<MoviesSearchList movies={movies} />

				<WatchedMovies watched={watched} />
			</main>
		</>
	);
}
export default App;
