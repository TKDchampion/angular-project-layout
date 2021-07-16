import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scope-title',
  templateUrl: './scope-title.component.html',
  styleUrls: ['./scope-title.component.scss'],
})
export class ScopeTitleComponent {
  @Input() title!: string;
  @Input() tag!: string;
}
