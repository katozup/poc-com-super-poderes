import { Card } from './Card';
import { Custom } from './Custom';
import { Page } from './Page';
import { Site } from './Site';
import { Visitor } from './Visitor';

export class DefaultPageLoad {
  cartao: Card;
  custom: Custom;
  page: Page;
  site: Site;
  rule: string;
  visitor: Visitor;

  constructor(cardType: string, dn: string, nomeDoErro: string, iDPF: string, tipoCliente: string) {
    this.cartao = new Card(cardType);
    this.custom = new Custom(dn);
    this.page = new Page(nomeDoErro, cardType);
    this.site = new Site(cardType);
    this.rule = "pageLoad";
    this.visitor = new Visitor(iDPF, tipoCliente);
  }
}
