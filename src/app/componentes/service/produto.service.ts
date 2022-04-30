import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  getProdutos(): Produto[] {
    return PRODUTOS;
  }

  getProduto(id: number): Produto {
    return PRODUTOS.find((produto: Produto) => produto.id === id)!;
  }
}

const PRODUTOS = [
  {
    id: 1,
    nome: 'Fritadeira AirFryer Star Philips Walita',
    preco: 1199.0,
    img: 'assets/air_frier.webp',
    info: 'A exclusiva tecnologia Rapid Air da Philips Walita permite a você fritar com ar para deixar o alimento crocante por fora e macio por dentro com resultados perfeitos: Baixo teor de gordura: Com a Airfryer, você pode fritar, grelhar, assar e, até mesmo, cozinhar! - Controle de tempo e de temperatura ajustável manualmente: O timer integrado permite que você programe o tempo de cozimento de até 30 minutos. - A função de desligamento automático inclui um indicador sonoro de "pronto". - O controle de temperatura totalmente ajustável permite programar a melhor temperatura de cozimento para seus alimentos em até 200°C.',
  },
  {
    id: 2,
    nome: 'Cafeteira Expresso Philips Walita',
    preco: 3999.9,
    img: 'assets/cafeteira.webp',
    info: 'Cafeteira Espresso Philips Walita 110V, com vaporizador clássico e 12 níveis de moagem',
  },
  {
    id: 3,
    nome: 'Liquidificador Philips Walita Serie 5000',
    preco: 399.9,
    img: 'assets/liquidificador.webp',
    info: '',
  },
];
