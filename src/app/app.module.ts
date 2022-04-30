import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListProdutoComponent } from './componentes/produto/list-produto/list-produto.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { HeaderComponent } from './componentes/shared/header/header.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { InfoProdutoComponent } from './componentes/produto/info-produto/info-produto.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListProdutoComponent,
    InfoProdutoComponent,
    CarrinhoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
