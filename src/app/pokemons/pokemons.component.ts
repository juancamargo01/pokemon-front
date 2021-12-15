import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons:Array<any> = []
  audio = new Audio("http://music.ogg");
  selectPokemon!: boolean
  pokemonSelecionado = document.querySelector('.list')

  constructor(private listService: ListService) {
    this.selectPokemon = false

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


  playSound(){
    let audio = new Audio();
    audio.src ="../assets/audio/picachu.mp3"


    audio.load();
    audio.play();
    this.selectPokemon = true

    this.pokemons.forEach(element => {


     this.pokemonSelecionado?.classList.remove('mouseOn')
     this.pokemonSelecionado?.classList.add('selecionado')

    });



    }



}
