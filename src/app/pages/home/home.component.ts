import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() {
    // lint
  }

  ngOnInit(): void {
    this.Editor.create(document.querySelector('#editor'), {
      cloudServices: {
        tokenUrl: 'https://example.com/cs-token-endpoint',
        uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/',
      },
    })
      .then((resp: unknown) => {
        console.log(resp);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }
}
