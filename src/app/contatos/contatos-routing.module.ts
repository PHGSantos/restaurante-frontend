import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos.component';
import { ListContatosComponent } from './list-contatos/list-contatos.component';

const routes: Routes = [
  { path: '', component: ListContatosComponent }
//{ path: 'add', component: AddProdutosComponent },
//{ path: 'edit/:id', component: EditProdutosComponent },
//{ path: 'delete/:id', component: DeleteProdutosComponent },
//{ path: 'search', component: SearchProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
