import { Produto } from 'src/app/componentes/model/produto';

export interface ItemCarrinho {
  produto: Produto;
  qtde: number;
}
