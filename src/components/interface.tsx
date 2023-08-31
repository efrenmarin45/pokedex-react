import {
	APIResource,
	Description,
	FlavorText,
	Genus,
	Name,
	NamedAPIResource,
	PalParkEncounterArea,
	PokemonAbility,
	PokemonHeldItem,
	PokemonMove,
	PokemonSpeciesDexEntry,
	PokemonSpeciesVariety,
	PokemonSprites,
	PokemonStat,
	PokemonType,
	VersionGameIndex,
} from "pokenode-ts";

export interface Search {
	userSelection: string;
}

export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: PokemonAbility[];
	forms: NamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;
	moves: PokemonMove[];
	sprites: PokemonSprites;
	species: NamedAPIResource;
	stats: PokemonStat[];
	types: PokemonType[];
}

export interface PokemonSpecies {
	id: number;
	name: string;
	order: number;
	gender_rate: number;
	capture_rate: number;
	base_happiness: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	hatch_counter: number;
	has_gender_differences: boolean;
	forms_switchable: boolean;
	growth_rate: NamedAPIResource;
	pokedex_numbers: PokemonSpeciesDexEntry[];
	egg_groups: NamedAPIResource[];
	color: NamedAPIResource;
	shape: NamedAPIResource;
	evolves_from_species: NamedAPIResource;
	evolution_chain: APIResource;
	habitat: NamedAPIResource;
	generation: NamedAPIResource;
	names: Name[];
	pal_park_encounters: PalParkEncounterArea[];
	flavor_text_entries: FlavorText[];
	form_descriptions: Description[];
	genera: Genus[];
	varieties: PokemonSpeciesVariety[];
}

export interface PokeImageTypes {
	pokeData: {
		sprites: PokemonSprites;
		name: string;
	};
}

export interface AbilityTypes extends PokemonSpecies, Pokemon {
	pokeData: {
		basePokeData: {
			abilities: PokemonAbility[];
		};
	};
}

export interface EvolutionTypes extends PokemonSpecies {
	pokeData: {
		pokeData: {
			evolves_from_species: NamedAPIResource;
		};
	};
}

export interface GameTypes extends PokemonSpecies {
	pokeData: {
		basePokeData: {
			game_indices: VersionGameIndex[];
		};
		pokeData: {
			generation: NamedAPIResource;
		};
	};
}

export interface StatTypes extends PokemonSpecies {
	pokeData: {
		basePokeData: {
			types: PokemonType[];
			height: number;
			weight: number;
		};
	};
}

export interface FlavorTextTypes extends PokemonSpecies, Pokemon {
	pokeData: {
		pokeData: {
			flavor_text_entries: FlavorText[];
		};
		basePokeData: {
			types: PokemonType[];
		};
	};
}

export interface DropdownTypes extends PokemonSpecies, Pokemon {
	pokeData: {
		basePokeData: {
			types?: Array<{ type: { name: string } }>;
			name?: string;
			height?: number;
			weight?: number;
			evolves_from_species?: NamedAPIResource | null;
			game_indices?: Array<{ version: { name: string } }>;
			generation?: NamedAPIResource;
			flavor_text_entries?: Array<{ flavor_text: string | undefined }>;
		};
	};
	basePokeData: {
		types: Array<{ type: { name: string } }>;
	};
}
