import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EveService } from 'src/app/services/env.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent {
  memberModalRef!: BsModalRef;
  identity = 1;
  isMailValidated = false;

  constructor(private envService: EveService, private modalService: BsModalService) {
    this.identity = this.envService.getEnv('identity') as number;
    this.isMailValidated = this.envService.getEnv('isMailValidated') as boolean;
  }

  openBindPopup(template: TemplateRef<unknown>): void {
    this.memberModalRef = this.modalService.show(template, {
      class: 'modal-dialog-centered modal_max_width',
    });
  }
}
