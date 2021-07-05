import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  getProdutos(){
    let url = environment.PRODUTO_BASE_URL+environment.PRODUTO.GET_ALL_PRODUTOS;
    return this.httpClient.get(url);
  }
}
