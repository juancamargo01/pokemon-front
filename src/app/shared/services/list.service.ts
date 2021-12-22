import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.baseUrl';
import { Pokemon } from './interfaces/pokemon_model';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(private httpCliente :HttpClient) { }

  getList():Observable<any>{

    return this.httpCliente.get<Pokemon>(`${BASE_URL}/pokemon`)

  }

  public getPokemonPorId(id: number): Promise<Pokemon> {
    return this.httpCliente.get(`${BASE_URL}/pokemon?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta[id-1]
      })
  }
}
