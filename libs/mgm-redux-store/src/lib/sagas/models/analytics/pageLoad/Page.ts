export class Page {
  secao: string;
  subSecao1: string;
  subSecao2: string;
  nomeDoErro: string;
  nome: string;

  constructor(nomeDoErro: string, cardType: string) {
    this.secao = "MemberGetMember";
    this.subSecao1 = "IndicarAmigo";
    this.subSecao2 = "IndicarCartao";
    this.nomeDoErro = nomeDoErro;
    this.nome = this.resolveName(cardType);
  }

  resolveName(cardType: string): string {
    return `${this.getCardTypeAcronym(cardType)}:${this.secao}:${this.subSecao1}:${this.subSecao2}:Erro`
  }

  getCardTypeAcronym(cardType): string {
    switch (cardType) {
      case 'CREDICARD': return 'CC'
      case 'HIPERCARD': return 'HC'
      case 'LUIZACARD': return 'LU'
      default: return 'IC';
    }
  }
}