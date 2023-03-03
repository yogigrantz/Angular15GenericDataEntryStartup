import { Merchandise } from "./merchandise";

export class ListMerchandise {
    public items: Merchandise[] = [];

    constructor() {

    }

    public addItem(item: Merchandise) {
          this.items.push(item);
    }

}
