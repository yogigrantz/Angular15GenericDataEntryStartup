import { Component } from '@angular/core';
import { postService } from '../services/postService';

@Component({
  selector: 'app-post-to-web-api',
  templateUrl: './post-to-web-api.component.html',
  styleUrls: ['./post-to-web-api.component.css'],
})
export class PostToWebAPIComponent {

  public url: string = "";
  public jsonPayload: string = "";
  public result: string = "";
  constructor(private ps: postService) {

  }

  public postToWebAPI() : void {
        this.ps.postData(this.url, JSON.parse(this.jsonPayload), "headerKey1", "value1").subscribe(
          resp => {
              this.result = JSON.stringify(resp, null, "\t");
          },
          err => {
            this.result = JSON.stringify(err, null, "\t");
          }
      );
  }

  public getSampleURL() {
    this.url = "";
    this.jsonPayload = "{}";
  }
  
}
