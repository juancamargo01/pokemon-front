import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../shared/services/interfaces/pokemon_model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-pokemon-selecionado',
  templateUrl: './pokemon-selecionado.component.html',
  styleUrls: ['./pokemon-selecionado.component.css']
})
export class PokemonSelecionadoComponent implements OnInit {

  public meuPokemon! :Pokemon
  constructor(
    private route: ActivatedRoute,
    private listService: ListService) { }

  ngOnInit(): void {
    this.route.params.subscribe((parametros: Params)=>{
      this.listService.getPokemonPorId(parametros.id)
      .then((pokemon:Pokemon)=>{
        this.meuPokemon = pokemon
        console.log(this.meuPokemon)
      })
    })

  }

}
