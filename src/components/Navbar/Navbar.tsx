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
			sx={{ borderRadius: "0.9rem", backgroundColor: "var(--color-primary)" }}
		>
			<Toolbar
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					alignItems: "center",
					height: "7.2rem",
					padding: "0 3.2rem",
				}}
			>
				<Logo />
				{children}
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
