import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../../services/produto.service';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  produtoResult:any;
  produtoList:any;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutoList();
  }

  getProdutoList(){ 
    this.produtoService.getProdutos().subscribe( (data) => {
      console.log(data);
      this.produtoResult = data;
      this.produtoList = this.produtoResult.result;
      console.log(this.produtoList);
    });
  }

}
