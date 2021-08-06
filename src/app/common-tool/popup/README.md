# Popup Readme

All popup file in this filder

## Getting Started

### default-modal

預設Popup Modal Input

```
@Input() modalRef!: BsModalRef;
@Input() title!: string;
@Input() subTitle!: string;
@Input() showCancelIcon = true;
<!-- 是否需要關閉按鈕 -->
@Input() needRecheck = false;
<!-- 點擊關閉時提示popup -->
``` 

### bind-mail-modal
綁定信箱Modal Input

```
@Input() modalRef!: BsModalRef;
@Input() title!: string;
@Input() subTitle!: string;
@Input() showStepIcon = false;
<!-- 顯示流程圖示 -->
@Input() registerAccount!: RegisterAccountModal;
<!-- 引入Accoont Type:RegisterAccountModal -->
@Input() verifyEmailStatus!: boolean;
<!-- 引入驗證信箱狀態 -->
@Output() backStep = new EventEmitter<boolean>();
<!-- 點擊上一步 -->
@Output() register = new EventEmitter<boolean>();
<!-- 點擊註冊 -->
@Output() verifiedMail = new EventEmitter<boolean>();
<!-- 信箱驗證完成Output -->
```
