import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const Search = () => {
	const [query, setQuery] = useState<string>("");

	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<TextField
				sx={{ width: "100%", fontSize: "2rem" }}
				size="medium"
				autoFocus
				label={
					<Typography variant="h6" sx={{ fontSize: "1.5rem", color: "white" }}>
						Search movies...
					</Typography>
				}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</Box>
	);
};
export default Search;
