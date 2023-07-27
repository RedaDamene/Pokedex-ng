import { Component } from '@angular/core';
import {Type} from "../../model/Type";
import {Pokemon} from "../../model/Pokemon";
import {Categorie} from "../../model/Categorie";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  public types:Type[];
  public pokemons:Pokemon[];
  public categories:Categorie[];

  constructor() {
    this.types = [];
    this.pokemons = [];
    this.categories = [];

    this.categories.push(
      new Categorie("graine"),
      new Categorie("lezard"),
      new Categorie("flamme"),
    )

    this.pokemons.push(
      new Pokemon("Bulbizarre", 0.7, 6.9, [new Type("plante"), new Type("poison")], new Categorie("graine")),
    )
  }
}
