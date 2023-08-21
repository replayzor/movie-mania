import axios from "axios";

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
	const KEY = "5260199b";

	const response = await axios(
		`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
	);
	const data = response.data;
	return data;
};
