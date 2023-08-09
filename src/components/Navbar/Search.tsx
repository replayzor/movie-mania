import { useState } from "react";
import { TextField, Typography } from "@mui/material";

const Search = () => {
	const [query, setQuery] = useState<string>("");

	const inputProps = {
		style: {
			color: "white",
			fontSize: "2rem",
		},
	};

	return (
		<>
			<TextField
				inputProps={inputProps}
				label={
					<Typography variant="h6" sx={{ fontSize: "2rem", color: "white" }}>
						Search movies...
					</Typography>
				}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				sx={{ width: "50%" }}
			/>
		</>
	);
};
export default Search;
