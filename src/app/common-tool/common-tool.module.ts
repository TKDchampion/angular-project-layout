import { ResizeService } from './../services/resize.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArticleComponent } from './new-article/new-article.component';
import { LearnWillingnessComponent } from './learn-willingness/learn-willingness.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewVideoComponent } from './new-video/new-video.component';
import { HotSubjectComponent } from './hot-subject/hot-subject.component';
import { NewActiveComponent } from './new-active/new-active.component';
import { ProfileDropdownComponent } from './dropdown/profile-dropdown/profile-dropdown.component';
import { ScopeTitleComponent } from './scope-title/scope-title.component';
import { BannerComponent } from './banner/banner.component';
import { SubsiteDropdownComponent } from './dropdown/subsite-dropdown/subsite-dropdown.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageDropdownComponent } from './dropdown/language-dropdown/language-dropdown.component';
import { VerifyKanbanComponent } from './verify-kanban/verify-kanban.component';
import { BrandComponent } from './brand/brand.component';
import { SwiperModule } from 'swiper/angular';
import { UnsetLearnWillingnessComponent } from './unset-learn-willingness/unset-learn-willingness.component';
import { LoginModalComponent } from './popup/login-modal/login-modal.component';
import { FormsModule } from '@angular/forms';
import { DefaultModalComponent } from './popup/default-modal/default-modal.component';
import { RegisterModalComponent } from './popup/register-modal/register-modal.component';
import { VerifyModalComponent } from './popup/verify-modal/verify-modal.component';
import { SuccessModalComponent } from './popup/success-modal/success-modal.component';
import { PrivacyModalComponent } from './popup/privacy-modal/privacy-modal.component';
import { ToastComponent } from './toast/toast.component';
import { ForgetPasswordModalComponent } from './popup/forget-password-modal/forget-password-modal.component';
import { RegisterLineModalComponent } from './popup/register-line-modal/register-line-modal.component';
import { RegisterLearnModalComponent } from './popup/register-learn-modal/register-learn-modal.component';
import { NavBarIcononlyComponent } from './nav-bar-icononly/nav-bar-icononly.component';
import { BindMailModalComponent } from './popup/bind-mail-modal/bind-mail-modal.component';
import { VerifyUserModalComponent } from './popup/verify-user-modal/verify-user-modal.component';
import { SalesInviteComponent } from './popup/sales-invite/sales-invite.component';

@NgModule({
  declarations: [
    NewArticleComponent,
    LearnWillingnessComponent,
    NavBarComponent,
    NewVideoComponent,
    HotSubjectComponent,
    NewActiveComponent,
    ProfileDropdownComponent,
    ScopeTitleComponent,
    BannerComponent,
    SubsiteDropdownComponent,
    FooterComponent,
    LanguageDropdownComponent,
    VerifyKanbanComponent,
    BrandComponent,
    UnsetLearnWillingnessComponent,
    LoginModalComponent,
    DefaultModalComponent,
    RegisterModalComponent,
    VerifyModalComponent,
    SuccessModalComponent,
    PrivacyModalComponent,
    ToastComponent,
    ForgetPasswordModalComponent,
    RegisterLineModalComponent,
    RegisterLearnModalComponent,
    NavBarIcononlyComponent,
    BindMailModalComponent,
    VerifyUserModalComponent,
    SalesInviteComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SwiperModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    NewArticleComponent,
    LearnWillingnessComponent,
    NavBarComponent,
    NewVideoComponent,
    HotSubjectComponent,
    NewActiveComponent,
    ScopeTitleComponent,
    BannerComponent,
    FooterComponent,
    VerifyKanbanComponent,
    BrandComponent,
    UnsetLearnWillingnessComponent,
    DefaultModalComponent,
    VerifyModalComponent,
    SuccessModalComponent,
    PrivacyModalComponent,
    ToastComponent,
    RegisterLineModalComponent,
    RegisterLearnModalComponent,
    NavBarIcononlyComponent,
    BindMailModalComponent,
    VerifyUserModalComponent,
    SalesInviteComponent
  ],
  providers: [ResizeService],
})
export class CommonToolModule {}
