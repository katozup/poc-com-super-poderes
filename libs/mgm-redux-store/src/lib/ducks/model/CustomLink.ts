export class CustomLink {
  pageName: string;
  itemClicked: string;
 
  constructor(pageName: string, itemClicked: string) {
    this.pageName = pageName;
    this.itemClicked = itemClicked;
  }
}
