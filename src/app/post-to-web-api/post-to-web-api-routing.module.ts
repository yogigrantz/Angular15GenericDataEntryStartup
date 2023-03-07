import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostToWebAPIComponent } from './post-to-web-api.component';

const routes: Routes = [{ path: '', component: PostToWebAPIComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostToWebAPIRoutingModule { }
