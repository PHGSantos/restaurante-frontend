import { Component, OnInit } from '@angular/core';
import {ContatoService} from '../../services/contato.service';

@Component({
  selector: 'app-list-contatos',
  templateUrl: './list-contatos.component.html',
  styleUrls: ['./list-contatos.component.css']
})
export class ListContatosComponent implements OnInit {

  contatoResult:any;
  contatoList:any;

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.getContatoList();
  }

  getContatoList(){ 
    this.contatoService.getContatos().subscribe( (data) => {
      console.log(data);
      this.contatoResult = data;
      this.contatoList = this.contatoResult.result;
      console.log(this.contatoList);
    });
  }

}
