import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
