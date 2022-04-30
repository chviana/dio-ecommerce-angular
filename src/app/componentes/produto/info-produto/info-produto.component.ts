import { ProdutoService } from './../../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css'],
})
export class InfoProdutoComponent implements OnInit {
  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    img: '',
    info: '',
  };

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(): void {
    this.produto = this.produtoService.getProduto(
      +this.activatedRoute.snapshot.paramMap.get('id')!
    );
  }
}
