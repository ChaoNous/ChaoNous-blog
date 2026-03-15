// Local movie data configuration
export type MovieItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
};

const localMovieList: MovieItem[] = [];

export default localMovieList;
