import { Typography, Box } from "@mui/material";

const Logo = () => {
	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
			<Typography
				component="span"
				role="img"
				aria-label="Logo"
				sx={{ fontSize: "3.2rem" }}
			>
				🍿
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontSize: "2.4rem", fontWeight: 600, color: "#fff" }}
			>
				Movie Mania
			</Typography>
		</Box>
	);
};
export default Logo;
