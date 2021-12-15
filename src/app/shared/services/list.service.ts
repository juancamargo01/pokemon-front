import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(private httpCliente :HttpClient) { }

  getList():Observable<any>{

    return this.httpCliente.get<any>(BASE_URL)

  }
}
