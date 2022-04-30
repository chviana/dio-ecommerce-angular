import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/componentes/model/produto';

import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css'],
})
export class ListProdutoComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtos = this.produtoService.getProdutos();
  }
}
