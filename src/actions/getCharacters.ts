import { ApiData } from "../types";

export const getCharacters = async ({ pageParam = 0}): Promise<ApiData> => {
	const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageParam}`);
	const data = await response.json();
	return data;
}

getCharacters({ pageParam: 0})
