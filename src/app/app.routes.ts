import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PokemonsComponent } from "./pokemons/pokemons.component";



export const ROUTES: Routes = [

  { path: '', component: HomeComponent},
  { path: 'pokemon', component:PokemonsComponent}
]
