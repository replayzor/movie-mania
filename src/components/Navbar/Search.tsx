import { useEffect, useRef } from "react";

type SearchProps = {
	query: string;
	setQuery: (query: string) => void;
};

const Search = ({ query, setQuery }: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<div>
			<input
				ref={inputRef}
				className="search"
				type="text"
				placeholder="Search movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};
export default Search;
