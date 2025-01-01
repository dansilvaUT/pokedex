export type PokemonData = {
	id: number;
	name: string;
	images: { front_default: string; back_default: string };
	abilities: Ability[];
};

export interface Ability {
	ability: {
		name: string;
	};
}