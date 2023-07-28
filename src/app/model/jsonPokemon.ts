import {Pokemon} from "./Pokemon";

export interface JsonPokemon {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
