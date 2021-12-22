import { HttpContext } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../shared/services/interfaces/pokemon_model';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons:Array<Pokemon> = []
  audio = new Audio("http://music.ogg");
  selectPokemon!: boolean
  pokemonSelecionado = document.querySelector('.list')
  pAudio!:any

  @ViewChild('pokemonAudio') pokemonAudio : HTMLElement | undefined;


  constructor(private listService: ListService) {
    this.selectPokemon = false
    this.pAudio = this.pokemonAudio?.textContent
  }

  ngOnInit(): void {
    this.getlist()

  }

  getlist(){
    this.listService.getList().subscribe(result =>{

      this.pokemons = result;
      console.log(this.pokemons)
    })

  }


  playSound(pokemonAudio:string){
    let audio = new Audio();
    audio.src = pokemonAudio


    audio.load();
    audio.play();
    this.selectPokemon = true
  }



}
