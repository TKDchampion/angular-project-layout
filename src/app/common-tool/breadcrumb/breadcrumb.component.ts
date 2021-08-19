import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbText!: string;
  @Output() back = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  backPage() {
    this.back.emit(true);
  }

}
