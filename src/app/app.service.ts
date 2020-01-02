import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  urlApiBuscaCep = 'http://viacep.com.br/ws/71725206/json/';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Array<any>>(this.urlApiBuscaCep);
  }

  buscarCep(cep: any) {
    return this.http.post(this.urlApiBuscaCep, cep);
  }
}
