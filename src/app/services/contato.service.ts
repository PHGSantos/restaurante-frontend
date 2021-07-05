import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private httpClient: HttpClient) { }

  getContatos(){
    let url = environment.CONTATO_BASE_URL+environment.CONTATO.GET_ALL_CONTATOS;
    return this.httpClient.get(url);
  }
  //methods to communicate with the backend APIs
}
