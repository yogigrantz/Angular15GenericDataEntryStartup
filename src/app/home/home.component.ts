import { Component } from '@angular/core';
import { ListMerchandise } from '../data/list_marchandise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public listMerchandise: ListMerchandise) {
     this.listMerchandise.items = ListMerchandise.itemsPermanent;
  }

}
