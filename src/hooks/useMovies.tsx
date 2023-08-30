import axios from "axios";
import { useQuery } from "react-query";

const KEY = "5260199b";

export function useMovies(query: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["movies", query],
		queryFn: async () => {
			const response = await axios(
				`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
			);
			return response.data;
		},
	});

	const movies = data?.Search || [];

	return { movies, isLoading, isError, data };
}
