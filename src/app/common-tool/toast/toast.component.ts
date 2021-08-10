import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ModalService } from './toast.services';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  @Input() title!: string;
  private element;
  closeToastTime = 3;
  timeSubsrcibe!: Subscription;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    document.body.appendChild(this.element);
    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    this.closeToastTime = 3;
    const time = timer(0, 1000);
    this.timeSubsrcibe = time.subscribe(_ => {
      this.closeToastTime = this.closeToastTime - 1;
      if (this.closeToastTime === 0) {
        this.close();
        this.timeSubsrcibe.unsubscribe();
      }
    });
  }

  close(): void {
    this.element.style.display = 'none';
  }
}
