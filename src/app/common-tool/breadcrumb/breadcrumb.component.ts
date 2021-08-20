import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbText!: string;
  @Input() isBreadcrumb = true;
  @Output() back = new EventEmitter<boolean>();
  @Output() goType = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  backPage() {
    this.back.emit(true);
  }

  goToType() {
    this.goType.emit(true);
  }
}
