import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss'],
})
export class SortDropdownComponent {
  clickStatus = false;
  selected = '最新';
  dropList = ['最新', '最多觀看'];

  dropSelected(item: string): void {
    this.selected = item;
  }

  selectedBtn(template: HTMLButtonElement): void {
    this.clickStatus = !this.clickStatus;
    if (!this.clickStatus) {
      template.blur();
    }
  }
}
