import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostToWebAPIRoutingModule } from './post-to-web-api-routing.module';
import { PostToWebAPIComponent } from './post-to-web-api.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modals/modalComponents';
import { postService } from '../services/postService';
import { ModalService } from '../modals/modalServices';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PostToWebAPIComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PostToWebAPIRoutingModule
  ]
})
export class PostToWebAPIModule { }
