import { Typography, Box } from "@mui/material";

const Logo = () => {
	return (
		<Box display="flex" gap="0.8rem" alignItems="center">
			<Typography variant="h3" component="span" role="img">
				🍿
			</Typography>
			<Typography variant="h4">Movie Mania</Typography>
		</Box>
	);
};
export default Logo;
