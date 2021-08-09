import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-line-bind',
  templateUrl: './set-line-bind.component.html',
  styleUrls: ['./set-line-bind.component.scss']
})
export class SetLineBindComponent implements OnInit {
  bindMail = '';
  bindPassword = '';
  loginStatus = false;
  bindLineStatus = true;
  // 綁定line狀態 ture:顯示成功畫面 false:顯示失敗畫面
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.loginStatus = true;
  }
}
