import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder!: string;
  @Output() searchChange = new EventEmitter<string>();
  inputValue: string | undefined;

  close(): void {
    this.inputValue = '';
    this.searchChange.emit(this.inputValue);
  }

  onSearchChange() {
    this.searchChange.emit(this.inputValue);
  }
}
