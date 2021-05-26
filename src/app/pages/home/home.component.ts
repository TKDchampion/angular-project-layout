import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { GlobalStateService } from 'src/app/core/services/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor(private state: GlobalStateService) {}

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

  click(): void {
    this.state.notifyDataChanged('test', Math.random());
  }

  click2(): void {
    this.state.notifyDataChanged('test2', Math.random());
  }
}
