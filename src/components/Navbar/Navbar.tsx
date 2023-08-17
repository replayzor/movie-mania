import { ReactNode } from "react";
import Logo from "./Logo";
import { MovieTypes } from "../../types/movieTypes";

type NavbarProps = {
	movies: MovieTypes[];
	children: ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
	return (
		<nav className="nav-bar">
			<Logo />
			{children}
		</nav>
	);
};
export default Navbar;
