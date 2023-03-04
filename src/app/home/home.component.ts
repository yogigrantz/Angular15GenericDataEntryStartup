import { Component } from '@angular/core';
import { ListMerchandise } from '../data/list_marchandise';
import { ModalService } from '../modals/modalServices';
import { ModalServiceXL } from '../modals/modalServices/modal.serviceXL';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public listMerchandise: ListMerchandise, protected modalService: ModalService, protected modalServiceXL: ModalServiceXL) {
     this.listMerchandise.items = ListMerchandise.itemsPermanent;
     this.modalService.reset();
     this.modalServiceXL.reset();
  }

}
