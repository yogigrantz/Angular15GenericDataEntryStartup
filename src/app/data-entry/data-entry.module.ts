import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry.component';
import { FormsModule } from '@angular/forms';
import { ListMerchandise } from '../data/list_marchandise';
import { ModalComponent } from '../modals/modalComponents';
import { ModalComponentXL } from '../modals/modalComponents/modal.component-xl';


@NgModule({
  declarations: [
    DataEntryComponent,
    ModalComponent,
    ModalComponentXL
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataEntryRoutingModule
  ],
  providers: [
    ListMerchandise
  ]
})
export class DataEntryModule { }
