import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL : string = BASE_URL

  constructor(private httpCliente :HttpClient) { }

  getList():Observable<any>{

    return this.httpCliente.get<any>(this.apiURL)

  }
}
