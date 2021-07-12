import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpDefaultOptions, JWTOptions } from './core/model/option';

export class DKSHitHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = environment.baseApiUrl; // input api base url.
}

export class DKSHJWTOptions extends JWTOptions {
  key = 'user';
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, BrowserAnimationsModule],
  providers: [
    { provide: HttpDefaultOptions, useClass: DKSHitHttpDefaultOptions },
    { provide: JWTOptions, useClass: DKSHJWTOptions },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
