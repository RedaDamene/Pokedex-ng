import {Categorie} from "./Categorie";
import {Type} from "./Type";

export class Pokemon {
  public nom:string;
  public taille:number;
  public poids:number;
  public type:Type[];
  public categorie:Categorie;

  constructor(nom: string, taille: number, poids: number, type: Type[], categorie: Categorie) {
    this.nom = nom;
    this.taille = taille;
    this.poids = poids;
    this.type = type;
    this.categorie = categorie;
  }
}
