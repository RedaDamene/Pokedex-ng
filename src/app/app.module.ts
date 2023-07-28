import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokedexMainComponent } from './components/pokedex-main/pokedex-main.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    NavbarComponent,
    PokedexMainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
