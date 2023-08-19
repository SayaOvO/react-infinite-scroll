export interface ApiData {
	info: {
		count: number;
		next: string | null;
		pages: number;
		prev: null;
	};
	results: Character[];
};


export interface Character {
	id: string;
	name: string;
	status: Status;
	species: string;
	image: string;
	origin: Location;
	location: Location
};


type Status = 'Alive' | 'Dead' | 'unknown';
type Location = { name: string; url: string; }
