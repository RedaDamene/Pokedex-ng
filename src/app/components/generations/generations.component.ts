import { Component } from '@angular/core';
import {Generations} from "../../model/Generations";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent {
  public generations: Generations[];

  constructor() {
    this.generations = [];
    this.generations.push(
      new Generations("Generation I"),
      new Generations("Generation II"),
      new Generations("Generation III"),
      new Generations("Generation IV"),
      new Generations("Generation V"),
      new Generations("Generation VI"),
      new Generations("Generation VII")
    )
  }
}
