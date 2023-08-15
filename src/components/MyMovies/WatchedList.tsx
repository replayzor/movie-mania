import { Movie } from "../../types/movieTypes";
import WatchedMovie from "./WatchedMovie";

type WatchedListProps = {
	watched: Movie[];
};

const WatchedList = ({ watched }: WatchedListProps) => {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};
export default WatchedList;
