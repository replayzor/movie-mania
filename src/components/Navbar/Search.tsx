import { useEffect, useRef } from "react";

type SearchProps = {
	query: string;
	setQuery: (query: string) => void;
};

const Search = ({ query, setQuery }: SearchProps) => {
	const inputEl = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputEl.current?.focus();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (document.activeElement === inputEl.current) return;

			if (e.code === "Enter") {
				inputEl.current?.focus();
				setQuery("");
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.addEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div>
			<input
				className="search"
				type="text"
				placeholder="Search movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				ref={inputEl}
			/>
		</div>
	);
};
export default Search;
