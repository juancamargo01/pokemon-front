import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  personagens:Array<any> = []

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getlist()
  }

  getlist(){
    this.listService.getList().subscribe(result =>{
      this.personagens = result?.results;
      console.log(this.personagens)
    })

  }

}
