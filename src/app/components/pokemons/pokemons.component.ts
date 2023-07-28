import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JsonPokemon} from "../../model/jsonPokemon";
import {Pokemon} from "../../model/Pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  public pokemons$: Observable<Pokemon>;
  // public tabObservable: Observable[];

  constructor(
      @Inject(HttpClient)private http:HttpClient
  ) {
    this.pokemons$ = this.http.get<Pokemon>("http://pokeapi.co/api/v2/pokemon/1");



    /*for (let i = 0; i < 999; i++) {
      let item$ = this.http.get<JsonPokemon>("http://pokeapi.co/api/v2/pokemon");
      this.tabObservable.push(item$);
    }*/
  }
}
