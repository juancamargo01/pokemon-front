import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonSelecionadoComponent } from './pokemon-selecionado/pokemon-selecionado.component';
import { FasesPokemonComponent } from './fases-pokemon/fases-pokemon.component';
import { MundosComponent } from './mundos/mundos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    HomeComponent,
    PokemonsComponent,
    PokemonSelecionadoComponent,
    FasesPokemonComponent,
    MundosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
