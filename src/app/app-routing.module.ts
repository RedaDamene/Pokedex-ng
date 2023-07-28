import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonsComponent} from "./components/pokemons/pokemons.component";
import {GenerationsComponent} from "./components/generations/generations.component";
import {PokedexMainComponent} from "./components/pokedex-main/pokedex-main.component";

const routes: Routes = [
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component :PokedexMainComponent},
  {path: '**', component: PokedexMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
