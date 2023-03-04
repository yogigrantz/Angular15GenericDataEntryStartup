import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dataEntry', loadChildren: () => import('./data-entry/data-entry.module').then(m => m.DataEntryModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'uploadFile', loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
