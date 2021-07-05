import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';



const routes: Routes = [
  { path: '', component: ListProdutosComponent }
  //{ path: 'add', component: AddProdutosComponent },
  //{ path: 'edit/:id', component: EditProdutosComponent },
  //{ path: 'delete/:id', component: DeleteProdutosComponent },
  //{ path: 'search', component: SearchProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
