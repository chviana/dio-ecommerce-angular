import { Injectable } from '@angular/core';

import { ItemCarrinho } from '../model/item-carrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  getItensCarrinho(): ItemCarrinho[] {
    return CARRINHO.filter((item: ItemCarrinho) => item.produto.id !== 0);
  }

  addItemCarrinho(itemCarrinho: ItemCarrinho): void {
    const index = CARRINHO.findIndex(
      (iterator: ItemCarrinho) =>
        iterator.produto.id === itemCarrinho.produto.id
    );

    if (index > -1) {
      CARRINHO[index].qtde++;
    } else {
      CARRINHO.push(itemCarrinho);
    }
  }

  excluirItemCarrinho(itemCarrinho: ItemCarrinho): void {
    const index = CARRINHO.findIndex(
      (iterator: ItemCarrinho) =>
        iterator.produto.id === itemCarrinho.produto.id
    );
    CARRINHO.splice(index, 1);
  }
}

const CARRINHO = [
  {
    produto: {
      id: 0,
      nome: '',
      preco: 0,
      img: '',
      info: '',
    },
    qtde: 0,
  },
];
