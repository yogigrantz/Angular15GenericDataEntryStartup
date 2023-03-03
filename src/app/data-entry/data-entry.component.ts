import { Component } from '@angular/core';
import { ListMerchandise } from '../data/list_marchandise';
import { Merchandise } from '../data/merchandise';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent {
    public merchandise: Merchandise = new Merchandise();
    public listMerchandise: ListMerchandise = new ListMerchandise();

    constructor () {
    }

    public Add() {
      let newM : Merchandise  = new Merchandise();
      newM.title = this.merchandise.title;
      newM.description = this.merchandise.description;
      newM.price = this.merchandise.price;

      this.listMerchandise.addItem(newM);
    }

}
