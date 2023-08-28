import { MovieTypes } from "../../types/movieTypes";
import WatchedMovie from "./WatchedMovie";

type WatchedListProps = {
	watched: MovieTypes[];
	onDeleteWatched: (id: string) => void;
};

const WatchedList = ({ watched, onDeleteWatched }: WatchedListProps) => {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<WatchedMovie
					onDeleteWatched={onDeleteWatched}
					key={movie.imdbID}
					movie={movie}
				/>
			))}
		</ul>
	);
};

export default WatchedList;
