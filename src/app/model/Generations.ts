import {Pokemon} from "./Pokemon";

export class Generations {
  public name:string;
  public pokemons?:Pokemon[];


  constructor(name:string) {
    this.name = name;
    this.pokemons = [];
  }
}
