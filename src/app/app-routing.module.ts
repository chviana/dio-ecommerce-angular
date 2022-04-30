import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { InfoProdutoComponent } from './componentes/produto/info-produto/info-produto.component';
import { ListProdutoComponent } from './componentes/produto/list-produto/list-produto.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto/list', component: ListProdutoComponent },
  { path: 'produto/info/:id', component: InfoProdutoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'carrinho/:id', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
