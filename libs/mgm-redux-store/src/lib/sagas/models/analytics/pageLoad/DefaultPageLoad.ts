import { Card } from './Card';
import { Custom } from './Custom';
import { Page } from './Page';
import { Site } from './Site';

export class DefaultPageLoad {
  cartao: Card;
  custom: Custom;
  page: Page;
  site: Site;
  rule: string;

  constructor(cardType: string, dn: string, nomeDoErro: string) {
    this.cartao = new Card(cardType);
    this.custom = new Custom(dn);
    this.page = new Page(nomeDoErro, cardType);
    this.site = new Site(cardType);
    this.rule = "pageLoad";
  }
}
