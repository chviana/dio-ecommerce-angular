import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutoService } from '../service/produto.service';
import { ItemCarrinho } from './../model/item-carrinho';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: ItemCarrinho[] = [];
  total: number = 0;

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (Object.keys(this.activatedRoute.params).length > 0) {
      this.addItemCarrinho();
    }

    this.getItensCarrinho();
    this.router.navigate(['/carrinho']);
  }

  getItensCarrinho(): void {
    this.carrinho = this.carrinhoService.getItensCarrinho();
    let total = 0;
    this.carrinho.forEach((item) => {
      total += item.produto.preco * item.qtde;
    });
    this.total = total;
  }

  addItemCarrinho(): void {
    const produto = this.produtoService.getProduto(
      +this.activatedRoute.snapshot.paramMap.get('id')!
    );

    if (produto) {
      const itemCarrinho = {
        produto,
        qtde: 1,
      };
      this.carrinhoService.addItemCarrinho(itemCarrinho);
    }
  }

  excluirItemCarrinho(itemCarrinho: ItemCarrinho): void {
    this.carrinhoService.excluirItemCarrinho(itemCarrinho);
    this.getItensCarrinho();
  }
}
