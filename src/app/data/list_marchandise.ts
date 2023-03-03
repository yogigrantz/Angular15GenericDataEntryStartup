import { Merchandise } from "./merchandise";

export class ListMerchandise {
    public items: Merchandise[] = [];

    public static itemsPermanent: Merchandise[] = [];

    constructor() {
        this.items.push({
            Id:1,
            title: "Hot Dog",
            description: "Complete meal with french fries and coke",
            price: 5.25
        });
        this.items.push({
          Id: 2,
          title: "Hamburger",
          description: "Complete meal with french fries and coke",
          price: 5.75
      });
      this.items.push({
        Id: 3,
        title: "Salad",
        description: "Ceasar salad with crutton. No meat",
        price: 6.25
    });
    }

    public addItem(item: Merchandise) {
          this.items.push(item);
    }

}
