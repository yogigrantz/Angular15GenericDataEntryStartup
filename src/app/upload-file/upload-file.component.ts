import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  private _file!: File;
  public fileName : string = '';
  public url: any;

  public  onFileSelected(event : any) {

    this._file = event.target.files[0];

      if (this._file)
      {
          this.fileName = this._file.name;

          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          
          reader.onload = (_event) => {
            this.url = reader.result; 
          }
      }
  }

}
