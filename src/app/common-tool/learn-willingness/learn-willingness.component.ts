import { Component, Input, OnInit } from '@angular/core';
import { LearnWillingness } from './learn-willingness.modal';

@Component({
  selector: 'app-learn-willingness',
  templateUrl: './learn-willingness.component.html',
  styleUrls: ['./learn-willingness.component.scss']
})
export class LearnWillingnessComponent implements OnInit {
  @Input() learnWillingness!: LearnWillingness;
  constructor() { }

  ngOnInit(): void {
  }

}
