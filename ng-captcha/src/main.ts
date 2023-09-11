import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from "ng-recaptcha";


bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LdgzVQmAAAAAHRYozgADXJcqyulqsAyjIyT6x7p',
      } as RecaptchaSettings,
    },
  ],
})
  .catch(err => console.error(err));
