import Logo from "./Logo";
import MoviesResults from "./MoviesResults";
import Search from "./Search";

const Navbar = ({ movies }) => {
	return (
		<nav className="nav-bar">
			<Logo />
			<Search />
			<MoviesResults movies={movies} />
		</nav>
	);
};
export default Navbar;
