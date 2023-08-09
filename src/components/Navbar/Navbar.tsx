import { AppBar, Box, Toolbar } from "@mui/material";
import { ReactNode } from "react";

type NavbarProps = {
	movies: {
		imdbID: string;
		Title: string;
		Year: string;
		Poster: string;
	}[];
	children: ReactNode;
};

import Logo from "./Logo";

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
