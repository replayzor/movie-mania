type SearchProps = {
	query: string;
	setQuery: (query: string) => void;
};

const Search = ({ query, setQuery }: SearchProps) => {
	return (
		<div>
			<input
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
