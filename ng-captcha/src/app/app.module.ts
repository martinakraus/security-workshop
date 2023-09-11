import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from "ng-recaptcha";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    // ToDo npm install ng-recaptcha
    // https://www.npmjs.com/package/ng-recaptcha
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LdgzVQmAAAAAHRYozgADXJcqyulqsAyjIyT6x7p',
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
