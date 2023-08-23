import axios from "axios";

const KEY = "5260199b";

// Calculate the average of an array of numbers
export function calculateAverage(numbers: number[]): number {
	const total = numbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
	return total / numbers.length;
}

// Filter out undefined values and calculate average
export function filterAndCalculateAverage(
	values: (number | undefined)[]
): number {
	const validValues = values.filter(
		(value): value is number => typeof value === "number"
	);
	return calculateAverage(validValues);
}

export const fetchMovies = async (query: string) => {
	const response = await axios(
		`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
	);
	const data = response.data;
	return data;
};

export const fetchMovieDetails = async (id: string) => {
	const response = await axios(
		`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
	);
	const data = response.data;
	return data;
};
