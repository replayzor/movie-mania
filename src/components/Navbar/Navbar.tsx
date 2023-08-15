import { AppBar, Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";

type NavbarProps = {
	movies: Movie[];
	children: ReactNode;
};

import Logo from "./Logo";
import { Movie } from "../../types/movieTypes";

const Navbar = ({ children }: NavbarProps) => {
	return (
		<AppBar
			position="static"
			sx={{ borderRadius: "1rem", backgroundColor: "#6741d9", padding: "1rem" }}
		>
			<Toolbar>
				<Box
					sx={{
						flexGrow: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Logo />
					{children}
				</Box>
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
