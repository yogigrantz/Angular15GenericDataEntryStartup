import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataEntryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataEntryRoutingModule
  ]
})
export class DataEntryModule { }
