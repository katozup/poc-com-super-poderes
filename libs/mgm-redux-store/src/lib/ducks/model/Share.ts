export class Share {
  type: string;
  isLoading: boolean;

  constructor(type: string, isLoading: boolean) {
    this.type = type;
    this.isLoading = isLoading;
  }
}
