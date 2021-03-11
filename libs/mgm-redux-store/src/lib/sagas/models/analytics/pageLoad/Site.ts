export class Site {
  nome: string;
  ambiente: string;
  negocio: string;
  tipoDeCanal: string;

  constructor(cardType: string) {
    this.nome = cardType;
    this.ambiente = "LG";
    this.negocio = "NCC";
    this.tipoDeCanal = "Webview";
  }
}
