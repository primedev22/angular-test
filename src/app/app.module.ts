import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { ToggleComponent } from './toggle/toggle.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent,
    ToggleComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDropdownModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
