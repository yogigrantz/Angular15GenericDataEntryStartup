import { Component } from '@angular/core';
import { ListMerchandise } from '../data/list_marchandise';
import { Merchandise } from '../data/merchandise';
import { ModalService } from '../modals/modalServices';
import { ModalServiceXL } from '../modals/modalServices/modal.serviceXL';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent {
    public merchandise: Merchandise = new Merchandise();
    //public listMerchandise: ListMerchandise = new ListMerchandise();

    constructor (public listMerchandise: ListMerchandise,  protected modalService: ModalService, protected modalServiceXL: ModalServiceXL) {
      listMerchandise = new ListMerchandise();
    }

    public Add() {
      let newM : Merchandise  = new Merchandise();
      newM.title = this.merchandise.title;
      newM.description = this.merchandise.description;
      newM.price = this.merchandise.price;
      let ids = this.listMerchandise.items.map(item => item.Id);
      if (ids.length > 0) {
        newM.Id = Math.max(...ids) + 1;
      }
      else 
         newM.Id = 1;

      this.listMerchandise.addItem(newM);
    }

    public Edit(itemId: number) {
        this.merchandise = this.listMerchandise.items.filter(x => x.Id == itemId)[0]
    }

    public Delete(itemId: number) {
      this.listMerchandise.items = this.listMerchandise.items.filter(({ Id}) => Id !== itemId); 
    }

    public PostToWebAPI() {
        ListMerchandise.itemsPermanent = this.listMerchandise.items;
        console.log(this.modalService.modalAlreadyExists);
        this.modalService.open('modal-1');
    }

}
