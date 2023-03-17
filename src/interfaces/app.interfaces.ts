
export interface IMove {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
}

export interface Element {
    type: 'Trailer' | 'Clip' | 'Behind the Scenes' | 'Opening Credits'; 
}

export interface Product {
	default_price: {
		id: string;
		unit_amount: number;
	};
	id: string;
	images: string[];
	metadata: {
		adv: string;
	};
	name: string;
}